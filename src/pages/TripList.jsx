import { Link } from 'react-router-dom'

function TripList({ trips, handleDelete }) {
  const tripList = trips.map((trip) => (
    <section className='trip-card' key={trip.id}>
      <Link to={`/trip/${trip.id}`}>
        <p>{trip.location}</p>
        <p>{trip.trip_length}</p>
        <p>
          {' '}
          {new Date(trip.date).toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p>{trip.description}</p>
      </Link>
      <button onClick={() => handleDelete(trip.id)}>Delete Trip</button>
      <Link to={`/trip/update/${trip.id}`}>Edit Trip</Link>
    </section>
  ))
  return <div>{tripList}</div>
}

export default TripList
