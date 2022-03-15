import { Link, useParams } from "react-router-dom"

export default function House(props) {
    const houseObj = useParams()
    // console.log(houseObj)
    const houseName = houseObj.name
    // console.log(houseName)

    const foundHouse = props.GOT.find(house=>house.name === houseName)

    // console.log(foundHouse)
    
    const housePeople = foundHouse.people.map((person, i ) => {
        return (
            <li>
              <Link to={`/house/${houseName}/member/${person.id}`}>{person.name}</Link>
            </li>
        )
    })



    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
            </div>
            <ul className="list">
                A list of members
                <h4>{housePeople}</h4>
            </ul>
        </div>
    )
}