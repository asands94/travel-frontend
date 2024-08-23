function TripList({ trips, deleteTrip }) {
  const tripList = trips.map((trip) => (
    <div key={trip.id}>
      <p>{trip.id}</p>
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
      <button onClick={() => deleteTrip(trip.id)}>Delete Trip</button>
    </div>
  ))
  return <div>{tripList}</div>
}

export default TripList
