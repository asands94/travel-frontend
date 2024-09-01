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
    <section className='flex flex-col items-center h-[calc(100vh-5rem-24px)] justify-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center bg-secondary rounded-lg w-96 shadow-md py-4'
      >
        <h1 className='font-semibold'>{name}</h1>
        <label htmlFor='username' hidden>
          Username:
        </label>
        <input
          id='username'
          type='text'
          value={formData.username}
          name='username'
          onChange={handleChange}
          placeholder='Username'
        />
        <label htmlFor='password' hidden>
          Password:
        </label>
        <input
          id='password'
          type='password'
          value={formData.password}
          name='password'
          onChange={handleChange}
          placeholder='Password'
        />
        {loading && <Loading />}
        <button
          type='submit'
          className='bg-primary rounded-full py-3 px-body mt-4 font-medium text-white'
        >
          {name}
        </button>
      </form>
    </section>
  )
}

export default Form
