import React from 'react'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Houses from './components/Houses'
import House from './components/House'
import Member from './components/Member'

import gameOfThrones from './gameOfThrones'

class App extends React.Component {
  render() {
    const data = gameOfThrones
    console.log(data)

    return (
      <div>
        <Router>
          <Route 
            exact path="/"
            component={Houses} 
          />

          <Route 
            exact path="/houses/:id" 
            render={() => {
              return <House />
            }} 
          />

          <Route 
            path="/houses/:id/member/:id" 
            render={() => {
              return <Member />
            }}
          />
        </Router>
      </div>
    )
  }
}

export default App