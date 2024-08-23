import { Navigate } from 'react-router-dom'
import Form from '../components/Form'

function Register({ isAuthorized }) {
  return isAuthorized ? (
    <Navigate to='/trips' />
  ) : (
    <Form route='/api/user/register/' method='register' />
  )
}

export default Register
