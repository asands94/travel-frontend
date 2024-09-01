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
    <section className='flex flex-col items-center h-[calc(100vh-5rem-24px)] justify-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center bg-secondary rounded-lg w-96 shadow-md py-4'
      >
        <h1 className='font-semibold'>{title}</h1>
        <label htmlFor='location' hidden>
          Location:
        </label>
        <input
          placeholder='Location'
          id='location'
          type='text'
          name='location'
          required
          onChange={handleChange}
          value={formData.location}
        />

        <label htmlFor='trip-length' hidden>
          Trip Length (in days):
        </label>

        <input
          placeholder='Trip Length'
          id='trip-length'
          type='number'
          name='trip_length'
          onChange={handleChange}
          value={formData.trip_length}
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
          Trip Description:
        </label>

        <textarea
          placeholder='Trip Description'
          id='description'
          name='description'
          onChange={handleChange}
          value={formData.description}
        ></textarea>
        <button
          type='submit'
          className='bg-primary rounded-full py-3 px-body mt-4 font-medium text-white'
        >
          {title}
        </button>
      </form>
    </section>
  )
}

export default TripForm
