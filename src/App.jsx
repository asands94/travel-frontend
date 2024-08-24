import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Register from './pages/Register'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import TripContainer from './Containers/TripContainer'

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
        <Routes>
          <Route
            path='*'
            element={
              <TripContainer
                isAuthorized={isAuthorized}
                setIsAuthorized={setIsAuthorized}
              />
            }
          />

          <Route
            path='/register'
            element={<RegisterAndLogout isAuthorized={isAuthorized} />}
          />
          <Route path='/logout' element={<Logout />} />
          <Route path='/' element={<Home isAuthorized={isAuthorized} />} />
          <Route
            path='/login'
            element={<Login isAuthorized={isAuthorized} />}
          />
        </Routes>
      </Layout>
    </>
  )
}

export default App
