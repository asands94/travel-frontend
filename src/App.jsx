import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Trips from './pages/Trips'
import ProtectedRoute from './components/ProtectedRoute'

function Logout() {
  localStorage.clear()
  return <Navigate to='/' />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
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

          <Route path='/' element={<Home isAuthorized={isAuthorized} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<RegisterAndLogout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
