import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import ItineraryForm from '../components/itineraryForm'
import { createItinerary } from '../services/itineraries'
import Itineraries from '../components/Itineraries'

function TripDetail({
  trips,
  itineraries,
  fetchItineraries,
  handleCreate,
  setItineraries,
  handleDelete,
  handleDeleteItinerary,
}) {
  const { id } = useParams()

  useEffect(() => {
    fetchItineraries(id)
  }, [])

  const trip = trips.find((trip) => trip.id === Number(id))
  if (!trip) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Trip Detail</h1>
      <section
        className='w-full lg:w-fit p-6 bg-primary rounded-lg shadow'
        key={trip.id}
      >
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

        <div className='mt-4 flex mt-6'>
          <button
            className='bg-danger rounded-lg py-2 px-3 text-white font-medium hover:bg-dangerHover mx-2'
            onClick={() => handleDelete(trip.id)}
          >
            Delete Trip
          </button>
          <Link
            className=' rounded-lg py-2 px-3 font-medium hover:text-secondary'
            to={`/trip/update/${trip.id}`}
          >
            Edit Trip
          </Link>
        </div>
      </section>
      <section>
        <h2>Itinerary</h2>
        {itineraries.length ? (
          <Itineraries
            itineraries={itineraries}
            setItineraries={setItineraries}
            handleDeleteItinerary={handleDeleteItinerary}
          />
        ) : (
          'no upcoming plans'
        )}
        <ItineraryForm
          method='post'
          itineraries={itineraries}
          handleCreate={handleCreate}
        />
      </section>
    </>
  )
}

export default TripDetail
