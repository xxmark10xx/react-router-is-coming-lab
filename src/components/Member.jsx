export default function Member(props) {
  console.log(props)
  return (
    <div className="page">
        <div className="header">
            <h2>{props.name}</h2>

            {/* bonus: */}
            <a
              href={`https://awoiaf.westeros.org/index.php/${props.wikiSuffix}`}
              target="_blank"
            >
              more info
            </a>
        </div>
        <div className="desc">
            <p>{props.description}</p>
        </div>
    </div>
  )
}