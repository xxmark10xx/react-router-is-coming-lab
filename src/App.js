import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import gameOfThrones from "./gameOfThrones"
import House from "./components/pages/House"
import Houses from "./components/pages/Houses"
import Member from "./components/pages/Member"


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route 
            exact path="/houses"
            element={<Houses GOT={gameOfThrones}/>}
          />

          <Route 
            path="/house/:name"
            element={<House GOT={gameOfThrones}/>}
          />

          <Route 
            path="/house/:name/member/:id"
            element={<Member GOT={gameOfThrones}/>}
          />


        </Routes>
      </Router>

    </div>
  )
}