import { Link, useParams } from "react-router-dom"

export default function House({ houses }) {
  const { id } = useParams()
  const house = houses.find(house => house.id.toString() === id)
  if (!house) return <h1> house {id} Not Found</h1>

  const members = house.people.map(person => {
    return (
      <li key={`${person.name}-${person.id}`}>
        <Link 
          to={`/houses/${id}/member/${person.id}`}
        >
          {person.name}
        </Link>
      </li>
    )
  })

  return (
    <div className="page">
        <div className="header">
            <h2>House of {house.name}</h2>

            {/* bonus: */}
            <a
              href={`https://awoiaf.westeros.org/index.php/${house.wikiSuffix}`}
              target="_blank"
            >
              more info
            </a>

        </div>
        
        <ul className="list">
            {members}
        </ul>
    </div>
  )
}