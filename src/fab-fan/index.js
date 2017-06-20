import React, { PureComponent } from 'react'
import { Motion, StaggeredMotion, spring, presets } from 'react-motion'

import './fab-fan.css'

const customSpring = {stiffness: 200, damping: 18}

export class FabFan extends PureComponent {
  state = {
    open: false
  }

  childButtonStyle = pos => {
    return {
      transform: `translateX(${pos}rem)`
    }
  }

  render () {
    let { onClick, options, actionContainerStyle, open } = this.props

    const openValue = open ? 0 : 20

    let optsWithStyle = options.map(r => {
      return {
        ...r,
        style: {springIn: 20, opacity: 0}
      }
    })

    const nextStyle = previousStyles => {
      return previousStyles.map((_, i) => {
        if (i === 0) {
          return {opacity: spring(open ? 1 : 0), springIn: spring(openValue, customSpring)}
        } else {
          const lastButtonPreviousPos = previousStyles[i - 1].springIn

          return {
            springIn: spring(lastButtonPreviousPos, customSpring)
          }
        }
      })
    }

    return (
      <Motion
        style={{
          spinOpen: spring(open ? 270 : 45, presets.wobbly)
        }}
      >
        {({ spinOpen, expandOpts, fadeOpts }) => (
          <div className='container'>
            <div className='content'>

              <StaggeredMotion
                defaultStyles={optsWithStyle.map(o => o.style)}
                styles={nextStyle}
              >
                {interpolatingStyles =>
                  <div style={{...actionContainerStyle}}>
                    {
                      interpolatingStyles.map(({ springIn }, i) => {
                        const styled = this.childButtonStyle(springIn)

                        return (
                          <div
                            key={i}
                            style={styled}
                            onClick={optsWithStyle[i].onClick}
                            className='fabItem'
                          >
                            <div>{optsWithStyle[i].name}</div>
                            <div
                              style={{
                                backgroundColor: optsWithStyle[i].background,
                                borderRadius: '50%',
                                height: 50,
                                width: 50
                              }}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
                }
              </StaggeredMotion>

              <button
                className={`fab ${open ? 'active' : ''}`} style={{
                  transform: `rotate(${spinOpen}deg)`
                }}
                onClick={onClick}
              >
                <div>×</div>
              </button>
            </div>
          </div>
        )}
      </Motion>
    )
  }
}

export default FabFan
