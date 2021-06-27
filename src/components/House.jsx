import { Link } from "react-router-dom"

export default function House(props) {
  console.log(props)
  const members = props.people.map(person => {
    return (
      <li key={`${person.name}-${person.id}`}>
        <Link to={`${props.match.url}/member/${person.id}`}>{person.name}</Link>
      </li>
    )
  })

  return (
    <div className="page">
        <div className="header">
            <h2>House of {props.name}</h2>

            {/* bonus: */}
            <a
              href={`https://awoiaf.westeros.org/index.php/${props.wikiSuffix}`}
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