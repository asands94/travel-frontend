import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../api'
import TripForm from '../components/TripForm'

function TripUpdate({ trips }) {
  const { id } = useParams()
  const singleTrip = trips.find((trip) => (trip.id = id))
  return (
    <section>
      <h2>Update Trip</h2>
      <TripForm
        method='put'
        trip={singleTrip}
        // formData={formData}
        // handleChange={handleChange}
      />
    </section>
  )
}

export default TripUpdate
