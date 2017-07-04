import React, { Component } from 'react'
import GithubBadge from  'react-github-badge'
import './App.css'

import FabFan from './fab-fan/'
import Overlay from './overlay/'

class App extends Component {
  state = {
    open: false,
    fabOpts: [
      {name: 'Action #1', onClick: () => console.log('Action #1'), background: '#C14890'},
      {name: 'Action #2', onClick: () => console.log('Action #2'), background: '#3DD2DD'},
      {name: 'Action #3', onClick: () => console.log('Action #3'), background: '#B53553'},
      {name: 'Action #4', onClick: () => console.log('Action #4'), background: '#42bf97'},
      {name: 'Action #5', onClick: () => console.log('Action #5'), background: '#1ea8d2'},
      {name: 'Action #6', onClick: () => console.log('Action #6'), background: '#edbb33'},
      {name: 'Action #7', onClick: () => console.log('Action #7'), background: '#FFF'}
    ]
  }

  toggleActionBar = () => {
    this.setState(state => {
      return {
        open: !state.open
      }
    })
  }

  render () {
    const {open, fabOpts} = this.state

    return (
      <div className="App">

      <GithubBadge
        url='https://github.com/hanford/react-fab-fan'
        title='Star on Github'
      />

        <h2>React Fab Fan</h2>

        <Overlay
          open={open}
          onClick={this.toggleActionBar}
        />

        <div className='container'>
          <FabFan
            open={open}
            options={fabOpts}
            onClick={this.toggleActionBar}
            actionContainerStyle={{
              width: '140px',
              position: 'relative',
              right: '5px',
              bottom: '15px'
            }}
          />
        </div>
      </div>
    )
  }
}

export default App
