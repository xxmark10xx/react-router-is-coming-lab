import { Link } from "react-router-dom"


export default function Houses(props) {
    let houseArr = props.GOT.map((house, i) =>{
        return (
            <li key={`Key-${i}`}>
                <Link to={`/house/${house.name}`}>{house.name}</Link>
            </li>
        )
    })
    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                {houseArr}
            </ul>
        </div>
    )
}