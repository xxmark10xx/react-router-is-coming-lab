import React from 'react'

import Houses from './components/Houses'
import House from './components/House'
import Member from './components/Member'


class App extends React.Component {
  render() {
    return (
      <div>
        <Houses />

        <House />

        <Member />
      </div>
    )
  }
}

export default App