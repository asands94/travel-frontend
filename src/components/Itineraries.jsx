import { Link } from 'react-router-dom'

function Itineraries({ itineraries }) {
  const itList = itineraries.map((it) => (
    <section className='it-card' key={it.id}>
      <Link to={`/it/${it.id}`}>
        <p>{it.location}</p>
        <p>{it.time}</p>
        <p>
          {new Date(it.date).toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p>{it.description}</p>
        <p>
          {it.priority === 'H'
            ? 'High'
            : it.priority === 'M'
            ? 'Medium'
            : 'Low'}
        </p>
      </Link>
      <button onClick={() => handleDelete(it.id)}>Delete Itinerary</button>
      <Link to={`/it/update/${it.id}`}>Edit Itinerary</Link>
    </section>
  ))
  return <>{itList}</>
}

export default Itineraries
