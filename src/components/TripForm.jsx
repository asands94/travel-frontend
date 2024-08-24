import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function TripForm({ handleCreate, handleUpdate, method, trips }) {
  const [formData, setFormData] = useState({
    location: '',
    trip_length: 0,
    date: '',
    description: '',
  })

  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const trip = trips.find((trip) => trip.id === Number(id))
      setFormData({
        location: trip?.location,
        trip_length: trip?.trip_length,
        date: trip?.date,
        description: trip?.description,
      })
    }
    if (trips?.length) {
      prefillFormData()
    }
  }, [trips, id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (method === 'post') {
      handleCreate(formData)
    } else {
      handleUpdate(formData, id)
    }
  }

  const title = method === 'post' ? 'Add a Trip' : 'Update Trip'
  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>{title}</button>
      </form>
    </>
  )
}

export default TripForm
