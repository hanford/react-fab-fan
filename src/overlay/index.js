import React from 'react'
import { Motion, spring } from 'react-motion'

import './style.css'

export default ({ open, onClick, overlayStyle }) => (
  <Motion style={{opacityOfBlocker: spring(open ? 0.6 : 0)}}>
    {({ opacityOfBlocker }) => (
      <div
        className='blocker'
        onClick={onClick}
        style={{opacity: opacityOfBlocker, pointerEvents: open ? 'all' : 'none', ...overlayStyle}}
      />
    )}
  </Motion>
)
