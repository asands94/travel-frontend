import api from './api'

export const getItineraries = async (id) => {
  const res = await api.get(`/api/trip/${id}/add-itinerary/`)
  return res.data
}

export const deleteItinerary = async (id) => {
  const res = await api.delete(`/api/itinerary/delete/${id}/`)
  return res
}

export const createItinerary = async (formData, id) => {
  const res = await api.post(`/api/trip/${id}/add-itinerary/`, formData)
  return res.data
}

export const updateItinerary = async (formData, id) => {
  const res = await api.put(`/api/itinerary/update/${id}/`, formData)
  return res.data
}
