import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
  const [showForm, setShowForm] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    fetchItineraries(id)
  }, [])

  const trip = trips.find((trip) => trip.id === Number(id))
  if (!trip) {
    return <h1>Loading...</h1>
  }

  return (
    <section className='flex flex-col items-center'>
      <h1 className='text-2xl font-semibold mb-body'>Trip Detail</h1>
      <section className='w-full lg:w-fit p-6 bg-secondary rounded-lg shadow-md'>
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
            className='bg-primary rounded-lg py-2 px-3 text-white font-medium hover:bg-dangerHover mx-2'
            onClick={() => handleDelete(trip.id)}
          >
            Delete Trip
          </button>
          <Link
            className=' rounded-lg py-2 px-3 font-medium hover:text-primary'
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
        {showForm ? (
          <button
            className='bg-primary rounded-full py-3 px-body font-medium text-white'
            onClick={() => setShowForm((prev) => !prev)}
          >
            Hide Form
          </button>
        ) : (
          <button
            className='bg-primary rounded-full py-3 px-body font-medium text-white'
            onClick={() => setShowForm((prev) => !prev)}
          >
            Show Form
          </button>
        )}
        {showForm ? (
          <ItineraryForm
            method='post'
            itineraries={itineraries}
            handleCreate={handleCreate}
          />
        ) : null}
      </section>
    </section>
  )
}

export default TripDetail
