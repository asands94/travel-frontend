import { useState } from 'react'
import { useParams } from 'react-router-dom'

function TripForm({ handleCreate, method, trips }) {
  const [formData, setFormData] = useState({
    location: '',
    trip_length: 0,
    date: '',
    description: '',
  })

  const { id } = useParams()

  const singleTrip = trips.find((trip) => {
    return Number(trip.id) === Number(id)
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const title = method === 'post' ? 'Add a Trip' : 'Update Trip'
  return (
    <>
      <h2>{title}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleCreate(formData)
        }}
      >
        <label htmlFor='location'>Location:</label>

        <input
          id='location'
          type='text'
          name='location'
          required
          onChange={handleChange}
          value={method === 'post' ? formData?.location : singleTrip?.location}
        />
        <label htmlFor='trip-length'>Trip Length:</label>

        <input
          id='trip-length'
          type='number'
          name='trip_length'
          onChange={handleChange}
          value={
            method === 'post' ? formData?.trip_length : singleTrip?.trip_length
          }
        />
        <label htmlFor='date'>Date:</label>

        <input
          id='date'
          type='date'
          name='date'
          onChange={handleChange}
          value={method === 'post' ? formData?.date : singleTrip?.date}
        />
        <label htmlFor='description'>Trip Description:</label>

        <textarea
          id='description'
          name='description'
          onChange={handleChange}
          value={
            method === 'post' ? formData?.description : singleTrip?.description
          }
        ></textarea>
        <button type='submit'>{title}</button>
      </form>
    </>
  )
}

export default TripForm
