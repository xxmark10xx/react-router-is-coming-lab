import { Link } from 'react-router-dom'

export default function Houses(props) {
  const houseLinks = props.houseData.map((house) => {
    return(
      <li key={`${house.name}-${house.id}`}>
        <Link to={`/houses/${house.id}`}>{house.name}</Link>
      </li>
    ) 
  })
  return (
    <div>
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
        <div className="list">
            <ul>
              {houseLinks}
            </ul>
        </div>
    </div>
  )
}