import React from 'react'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Houses from './components/Houses'
import House from './components/House'
import Member from './components/Member'

import gameOfThrones from './gameOfThrones'

export default function App() {
  const houseData = gameOfThrones
  console.log(houseData)

  return (
    <div>
      <Router>
        <Route 
          exact path="/"
          render={() => <Houses houseData={houseData} />}
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