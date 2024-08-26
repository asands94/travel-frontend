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
      <h2>Trip Detail</h2>
      <section className='trip-card'>
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

        <button onClick={() => handleDelete(trip.id)}>Delete Trip</button>
        <Link to={`/trip/update/${trip.id}`}>Edit Trip</Link>
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
