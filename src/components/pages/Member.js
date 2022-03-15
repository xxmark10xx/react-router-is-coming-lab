import { useParams } from "react-router-dom"


export default function Houses(props) {
    const houseObj = useParams()
    const houseName = houseObj.name
    const memberId = houseObj.id
    // console.log(memberId)
    const foundHouse = props.GOT.find(house=>house.name === houseName)
    const housePeople = foundHouse.people
    const foundPerson = housePeople.find(person=>person.id.toString() === memberId)
    console.log(foundPerson)

    // const houseMember = foundPerson.map((person, i) => {
    //     return (
    //         <li>
    //             {person.name}
    //             {person.description}
    //         </li>
    //     )
    // })
    
    

    return (
        <div className="page">
            <div className="header">
                <h2>Specific Member Name</h2>
            </div>
            <div className="desc">
                <h1>Name: {foundPerson.name}</h1>
                <h2>Description: {foundPerson.description}</h2>
                <a href={`https://awoiaf.westeros.org/index.php/${foundPerson.wikiSuffix}`}>Wiki Info</a>
                <h1>Id: {foundPerson.id}</h1>
            </div>
        </div>
    )
}