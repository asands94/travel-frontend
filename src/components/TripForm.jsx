function TripForm({ createTrip, formData, handleChange, method }) {
  return (
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
  )
}

export default TripForm
