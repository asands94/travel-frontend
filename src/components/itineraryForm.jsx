import { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

function ItineraryForm({
  handleCreate,
  handleUpdateItinerary,
  method,
  itineraries,
}) {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    location: '',
    time: '',
    date: '',
    description: '',
    priority: 'H',
  })

  const location = useLocation()
  const navigate = useNavigate()

  const it = itineraries.find((it) => it.id === Number(id))
  console.log(itineraries)

  useEffect(() => {
    const prefillFormData = () => {
      setFormData({
        location: it?.location,
        time: it?.time,
        date: it?.date,
        description: it?.description,
        priority: it?.priority,
      })
    }
    if (location.pathname !== `/trip/${id}`) {
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
      setFormData({
        location: '',
        time: '',
        date: '',
        description: '',
        priority: 'H',
      })
    } else {
      handleUpdateItinerary(formData, id)
      navigate(`/trip/${it.trip}`)
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
          id='time'
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

        <select
          name='priority'
          id='priority'
          onChange={handleChange}
          value={formData.priority}
        >
          <option defaultValue='H'>High</option>
          <option value='M'>Medium</option>
          <option value='L'>Low</option>
        </select>
        <button type='submit'>{title}</button>
      </form>
    </>
  )
}

export default ItineraryForm
