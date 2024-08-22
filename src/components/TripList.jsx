function TripList({ trips, onDelete }) {
  const tripList = trips.map((trip) => (
    <div key={trip.id}>
      <p>{trip.location}</p>
      <p>{trip.trip_length}</p>
      <p>{trip.date}</p>
      <p>{trip.description}</p>
    </div>
  ))
  return <div>{tripList}</div>
}

export default TripList
