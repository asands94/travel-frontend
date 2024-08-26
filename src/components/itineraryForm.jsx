import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ItineraryForm({ handleCreate, handleUpdate, method, itineraries }) {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    location: '',
    time: '',
    date: '',
    description: '',
    priority: 'H',
  })

  useEffect(() => {
    const prefillFormData = () => {
      const trip = itineraries.find((trip) => trip.id === Number(id))
      setFormData({
        location: trip?.location,
        time: trip?.time,
        date: trip?.date,
        description: trip?.description,
      })
    }
    if (itineraries?.length) {
      prefillFormData()
    }
  }, [itineraries, id])

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
      handleCreate(formData, id)
    } else {
      handleUpdate(formData, id)
    }
  }

  const title = method === 'post' ? 'Add Itinerary' : 'Update Itinerary'
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

        <label htmlFor='time'>Time:</label>

        <input
          id='trip-length'
          type='time'
          name='time'
          onChange={handleChange}
          value={formData.time}
        />
        <label htmlFor='date'>Date:</label>

        <input
          id='date'
          type='date'
          name='date'
          onChange={handleChange}
          value={formData.date}
        />
        <label htmlFor='description'>Description:</label>

        <textarea
          id='description'
          name='description'
          onChange={handleChange}
          value={formData.description}
        ></textarea>

        <label htmlFor='priority'>Priority:</label>

        <select name='priority' id='priority' onChange={handleChange}>
          <option value='H'>High</option>
          <option value='M'>Medium</option>
          <option value='L'>Low</option>
        </select>
        <button type='submit'>{title}</button>
      </form>
    </>
  )
}

export default ItineraryForm
