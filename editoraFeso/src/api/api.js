import axios from 'axios'

const API_URL = 'http://localhost:3000' // Certifique-se de usar o mesmo URL do seu servidor JSON

export const registerUser = async userData => {
   try {
      const response = await axios.post(`${API_URL}/cadastro`, userData)
      return response.data
   } catch (error) {
      throw error.response.data
   }
}

export const loginUser = async credentials => {
   try {
      const response = await axios.post(`${API_URL}/`, credentials)
      return response.data
   } catch (error) {
      throw error.response.data
   }
}
