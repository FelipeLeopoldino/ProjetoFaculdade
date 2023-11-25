import axios from 'axios'

const API_URL = 'http://localhost:3000' // Certifique-se de usar o mesmo URL do seu servidor JSON

export const registerUser = async userData => {
   try {
      const response = await axios.post(`${API_URL}/users`, userData)
      return response.data
   } catch (error) {
      throw error.response.data
   }
}

export const registerArticle = async article => {
   try {
      const response = await axios.post(`${API_URL}/article`, article)
      return response.data
   } catch (error) {
      throw error.response.data
   }
}

export const loginUser = async credentials => {
   try {
      const response = await axios.post(`${API_URL}/users`, credentials)
      return response.data
   } catch (error) {
      throw error.response.data
   }
}
