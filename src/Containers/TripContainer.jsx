import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { getTrips, createTrip } from '../services/trips'
import ProtectedRoute from '../components/ProtectedRoute'
import Trips from '../pages/TripList'
import TripForm from '../components/TripForm'
import NotFound from '../pages/NotFound'

function TripContainer({ isAuthorized, setIsAuthorized }) {
  const [trips, setTrips] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchTrips()
  }, [])

  const fetchTrips = async () => {
    const allTrips = await getTrips()
    setTrips(allTrips)
  }

  const handleCreate = async (formData) => {
    const tripData = await createTrip(formData)
    setTrips((prevState) => [...prevState, tripData])
    navigate('/trips')
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
            <Trips trips={trips} />
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
            <TripForm trips={trips} method='put' />
          </ProtectedRoute>
        }
      />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default TripContainer
