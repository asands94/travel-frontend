import { Link } from 'react-router-dom'

function TripList({ trips, handleDelete }) {
  const tripList = trips.map((trip) => (
    <div
      className='w-full p-6 bg-secondary rounded-lg shadow-md flex flex-col'
      key={trip.id}
    >
      <Link to={`/trip/${trip.id}`}>
        <p className='font-bold'>{trip.location}</p>
        {trip.date && (
          <p>
            {new Date(trip.date).toLocaleDateString('en-us', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        )}
        <p>{trip.trip_length} day trip</p>
        <p>{trip.description}</p>
      </Link>

      <div className='mt-6 self-center'>
        <button
          className='bg-primary rounded-lg py-2 px-3 text-white font-medium hover:bg-dangerHover mx-2'
          onClick={() => handleDelete(trip.id)}
        >
          Delete Trip
        </button>
        <Link
          className='rounded-lg py-2 px-3 font-medium hover:text-primary'
          to={`/trip/update/${trip.id}`}
        >
          Edit Trip
        </Link>
      </div>
    </div>
  ))
  return (
    <section className='flex flex-col items-center'>
      <h1 className='text-2xl font-semibold mb-body'>Upcoming Trips</h1>
      <section className='grid grid-cols-4 gap-4 '>{tripList}</section>
    </section>
  )
}

export default TripList
