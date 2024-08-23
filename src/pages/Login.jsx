import { Navigate } from 'react-router-dom'
import Form from '../components/Form'

function Login({ isAuthorized }) {
  return isAuthorized ? (
    <Navigate to='/trips' />
  ) : (
    <Form route='/api/token/' method='login' />
  )
}

export default Login
