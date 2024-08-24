// import { useState, useEffect } from 'react'
// import { getTrips } from '../services/trips.js'
// import TripList from '../components/TripList.jsx'
// import TripForm from '../components/TripForm.jsx'
import api from '../api.js'
import { Link } from 'react-router-dom'

// function Trips({ trips }) {
//   const deleteTrip = (id) => {
//     api
//       .delete(`/api/trip/delete/${id}/`)
//       .then((res) => {
//         if (res.status === 204) alert('Trip deleted')
//         else alert('Failed to delete trip')
//         getTrips()
//       })
//       .catch((e) => alert(e))
//   }

//   // const createTrip = (e) => {
//   //   e.preventDefault()
//   //   api
//   //     .post('/api/trips/', formData)
//   //     .then((res) => {
//   //       if (res.status === 201) alert('Trip created')
//   //       else alert('failed to create trip')
//   //       getTrips()
//   //     })
//   //     .catch((e) => alert(e))
//   // }

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target
//   //   setFormData((prevState) => ({
//   //     ...prevState,
//   //     [name]: value,
//   //   }))
//   // }

//   return (
//     <div>
//       <section>
//         <h2>Your Trips</h2>
//         <TripList trips={trips} deleteTrip={deleteTrip} />
//       </section>
//     </div>
//   )
// }

// export default Trips

function TripList({ trips }) {
  const deleteTrip = (id) => {
    api
      .delete(`/api/trip/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert('Trip deleted')
        else alert('Failed to delete trip')
        // getTrips()
      })
      .catch((e) => alert(e))
  }

  const tripList = trips.map((trip) => (
    <div key={trip.id}>
      <p>{trip.id}</p>
      <p>{trip.location}</p>
      <p>{trip.trip_length}</p>
      <p>
        {' '}
        {new Date(trip.date).toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <p>{trip.description}</p>
      <button onClick={() => deleteTrip(trip.id)}>Delete Trip</button>
      <Link to={`/trip/update/${trip.id}`}>Edit Trip</Link>
    </div>
  ))
  return <div>{tripList}</div>
}

export default TripList
