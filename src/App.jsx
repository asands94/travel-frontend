import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Trips from './pages/TripList'
import TripUpdate from './pages/TripUpdate'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'

function Logout() {
  localStorage.clear()
  return <Navigate to='/' />
}

function RegisterAndLogout({ isAuthorized }) {
  return <Register isAuthorized={isAuthorized} />
}

function App() {
  const [isAuthorized, setIsAuthorized] = useState(null)

  useEffect(() => {
    if (localStorage.length) {
      setIsAuthorized(true)
    }
  }, [])

  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              path='/trips'
              element={
                <ProtectedRoute
                  isAuthorized={isAuthorized}
                  setIsAuthorized={setIsAuthorized}
                >
                  <Trips />
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
                  <TripUpdate />
                </ProtectedRoute>
              }
            />
            <Route path='/' element={<Home isAuthorized={isAuthorized} />} />
            <Route
              path='/login'
              element={<Login isAuthorized={isAuthorized} />}
            />
            <Route path='/logout' element={<Logout />} />
            <Route
              path='/register'
              element={<RegisterAndLogout isAuthorized={isAuthorized} />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
