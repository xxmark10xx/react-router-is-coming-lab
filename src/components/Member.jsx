import { useParams } from "react-router-dom"

export default function Member({ houses }) {
  const { houseId, memberId } = useParams()
  const house = houses.find(house => house.id.toString() === houseId)
  if (!house) return <h1>houseId {houseId} not found </h1>
   
  const member = house.people.find(person => person.id.toString() === memberId)
  if (!member) return <h1>memberId {memberId} not found</h1>
  
  return (
    <div className="page">
        <div className="header">
            <h2>{member.name}</h2>

            {/* bonus: */}
            <a
              href={`https://awoiaf.westeros.org/index.php/${member.wikiSuffix}`}
              target="_blank"
            >
              more info
            </a>
        </div>
        <div className="desc">
            <p>{member.description}</p>
        </div>
    </div>
  )
}