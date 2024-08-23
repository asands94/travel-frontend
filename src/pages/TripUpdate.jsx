import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../api'
import TripForm from '../components/TripForm'

function TripUpdate() {
  const [trip, setTrip] = useState({})

  const [formData, setFormData] = useState({
    location: trip.location,
    trip_length: trip.trip_length,
    date: trip.date,
    description: trip.description,
  })
  const { id } = useParams()

  useEffect(() => {
    getTrip()
  }, [])

  const getTrip = () => {
    api
      .get(`/api/trip/update/${id}/`)
      .then((res) => res.data)
      .then((data) => {
        setTrip(data)
      })
      .catch((e) => alert(e))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  return (
    <section>
      <h2>Update Trip</h2>
      <TripForm
        method='put'
        trip={trip}
        formData={formData}
        handleChange={handleChange}
      />
    </section>
  )
}

export default TripUpdate
