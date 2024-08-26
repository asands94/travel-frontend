import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { getTrips, createTrip, updateTrip, deleteTrip } from '../services/trips'
import {
  getItineraries,
  deleteItinerary,
  createItinerary,
  updateItinerary,
} from '../services/itineraries'
import ProtectedRoute from '../components/ProtectedRoute'
import Trips from '../pages/TripList'
import TripDetail from '../pages/TripDetail'
import TripForm from '../components/TripForm'
import NotFound from '../pages/NotFound'

function TripContainer({ isAuthorized, setIsAuthorized }) {
  const [trips, setTrips] = useState([])
  const [itineraries, setItineraries] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchTrips()
  }, [])

  const fetchTrips = async () => {
    const allTrips = await getTrips()
    setTrips(allTrips)
  }

  const fetchItineraries = async (id) => {
    const allItineraries = await getItineraries(id)
    setItineraries(allItineraries)
  }

  const handleCreate = async (formData) => {
    const tripData = await createTrip(formData)
    setTrips((prevState) => [...prevState, tripData])
    navigate('/trips')
  }

  const handleUpdate = async (formData, id) => {
    const tripData = await updateTrip(formData, id)
    setTrips((prevState) =>
      prevState.map((trip) => {
        return trip.id === Number(id) ? tripData : trip
      })
    )
    navigate('/trips')
  }

  const handleDelete = async (id) => {
    await deleteTrip(id)
    setTrips((prevState) => prevState.filter((trip) => trip.id !== id))
  }

  return (
    <Routes>
      <Route
        path='/trips'
        element={
          <ProtectedRoute
            isAuthorized={isAuthorized}
            setIsAuthorized={setIsAuthorized}
          >
            <Trips trips={trips} handleDelete={handleDelete} />
          </ProtectedRoute>
        }
      />
      <Route
        path='/trip/:id'
        element={
          <ProtectedRoute
            isAuthorized={isAuthorized}
            setIsAuthorized={setIsAuthorized}
          >
            <TripDetail
              trips={trips}
              handleDelete={handleDelete}
              itineraries={itineraries}
              fetchItineraries={fetchItineraries}
              setItineraries={setItineraries}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path='/trip/add'
        element={
          <ProtectedRoute
            isAuthorized={isAuthorized}
            setIsAuthorized={setIsAuthorized}
          >
            <TripForm trips={trips} method='post' handleCreate={handleCreate} />
          </ProtectedRoute>
        }
      />
      <Route
        path='/trip/update/:id'
        element={
          <ProtectedRoute
            isAuthorized={isAuthorized}
            setIsAuthorized={setIsAuthorized}
          >
            <TripForm trips={trips} method='put' handleUpdate={handleUpdate} />
          </ProtectedRoute>
        }
      />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default TripContainer
