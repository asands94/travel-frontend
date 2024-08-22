import { useState, useEffect } from 'react'
import api from '../api'

function Trips() {
  const [trips, setTrips] = useState([])
  const [formData, setFormData] = useState({
    location: '',
    trip_length: 0,
    date: '',
    description: '',
  })

  console.log(formData)

  useEffect(() => {
    getTrips()
  }, [])

  const getTrips = () => {
    api
      .get('/api/trips/')
      .then((res) => res.data)
      .then((data) => {
        setTrips(data)
        console.log(data)
      })
      .catch((e) => alert(e))
  }

  const deleteTrip = (id) => {
    api
      .delete(`/api/trips/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert('Trip deleted')
        else alert('Failed to delete trip')
        getTrips()
      })
      .catch((e) => alert(e))
  }

  const createTrip = (e) => {
    e.preventDefault()
    api
      .post('/api/trips/', formData)
      .then((res) => {
        if (res.status === 201) alert('Trip created')
        else alert('failed to create trip')
        getTrips()
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
    <div>
      <h1>Your Trips</h1>
      <section></section>
      <section>
        <h2>Add a Trip</h2>
        <form onSubmit={createTrip}>
          <label htmlFor='location'>Location:</label>

          <input
            id='location'
            type='text'
            name='location'
            required
            onChange={handleChange}
            value={formData.location}
          />
          <label htmlFor='trip-length'>Trip Length:</label>

          <input
            id='trip-length'
            type='number'
            name='trip_length'
            onChange={handleChange}
            value={formData.trip_length}
          />
          <label htmlFor='date'>Date:</label>

          <input
            id='date'
            type='date'
            name='date'
            onChange={handleChange}
            value={formData.date}
          />
          <label htmlFor='description'>Trip Description:</label>

          <textarea
            id='description'
            name='description'
            onChange={handleChange}
            value={formData.description}
          ></textarea>
          <button type='submit'>Add Trip</button>
        </form>
      </section>
    </div>
  )
}

export default Trips
