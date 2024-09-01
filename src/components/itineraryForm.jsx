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
    <section className='flex flex-col items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center bg-secondary rounded-lg w-96 shadow-md py-4'
      >
        <h2 className='font-semibold'>{title}</h2>
        <label htmlFor='location' hidden>
          Location:
        </label>
        <input
          className='mt-6'
          placeholder='Location'
          id='location'
          type='text'
          name='location'
          required
          onChange={handleChange}
          value={formData.location}
        />

        <label htmlFor='time' hidden>
          Time:
        </label>

        <input
          id='time'
          type='time'
          name='time'
          onChange={handleChange}
          value={formData.time}
        />
        <label htmlFor='date' hidden>
          Date:
        </label>

        <input
          id='date'
          type='date'
          name='date'
          onChange={handleChange}
          value={formData.date}
        />
        <label htmlFor='description' hidden>
          Description:
        </label>

        <textarea
          placeholder='Description'
          id='description'
          name='description'
          onChange={handleChange}
          value={formData.description}
        ></textarea>

        <label htmlFor='priority'>Priority Level:</label>

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
        <button
          type='submit'
          className='bg-primary rounded-full py-3 px-body font-medium text-white'
        >
          {title}
        </button>
      </form>
    </section>
  )
}

export default ItineraryForm
