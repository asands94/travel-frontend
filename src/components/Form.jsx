import { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../services/constants'
import Loading from './Loading'

function Form({ route, method }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const name = method === 'login' ? 'Login' : 'Register'

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()

    try {
      const res = await api.post(route, {
        username: formData.username,
        password: formData.password,
      })
      if (method === 'login') {
        localStorage.setItem(ACCESS_TOKEN, res.data.access)
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
        navigate('/trips')
      } else {
        navigate('/login')
      }
    } catch (e) {
      alert(e)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{name}</h1>
      <input
        type='text'
        value={formData.username}
        name='username'
        onChange={handleChange}
        placeholder='Username'
      />
      <input
        type='password'
        value={formData.password}
        name='password'
        onChange={handleChange}
        placeholder='Password'
      />
      {loading && <Loading />}
      <button type='submit'>{name}</button>
    </form>
  )
}

export default Form
