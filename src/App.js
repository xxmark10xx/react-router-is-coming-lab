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
          render={(props) => {
            const house = houseData.find(house => house.id.toString() === props.match.params.id)
            // console.log(house)
            props = {...props, ...house}
            return <House {...props}/>
          }} 
        />

        <Route 
          path="/houses/:houseId/member/:memberId" 
          render={(props) => {
            // console.log(props)
            const member = houseData
              .find(house => house.id.toString() === props.match.params.houseId)
                .people
                  .find(person => person.id.toString() === props.match.params.memberId)

            props = {...props, ...member}
            return <Member {...props} />
          }}
        />
      </Router>
    </div>
  )
}