import api from '../api'

export const getTrips = async () => {
  const res = await api.get('/api/trips/')
  return res.data
}

export const deleteTrip = async (id) => {
  const res = await api.delete(`/api/trip/delete/${id}/`)
  return res
}

export const createTrip = async (formData) => {
  const res = await api.post('/api/trips/', formData)
  return res.data
}
