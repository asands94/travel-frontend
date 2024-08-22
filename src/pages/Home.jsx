import { Navigate } from 'react-router-dom'
import GuestHome from '../components/GuestHome'

function Home({ isAuthorized }) {
  return isAuthorized ? <Navigate to='/trips' /> : <GuestHome />
}

export default Home
