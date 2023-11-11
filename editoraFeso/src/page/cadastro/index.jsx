import { useState } from 'react'
import { registerUser } from '../../api/api'

// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import { Link } from 'react-router-dom'

export default function Cadastro() {
   const [userData, setUserData] = useState({
      username: '',
      password: '',
      name: '',
      email: ''
   })

   const [errorMessage, setErrorMessage] = useState(null)

   const handleInputChange = e => {
      const { name, value } = e.target
      setUserData(prevData => ({
         ...prevData,
         [name]: value
      }))
   }

   const handleRegistration = async () => {
      try {
         const user = await registerUser(userData)
         console.log('User registered:', user)
         resetUserData()
         // Lógica adicional após o registro bem-sucedido
      } catch (error) {
         console.error('Error during registration:', error)
         setErrorMessage(error.error) // Exemplo: Assumindo que o servidor envia um objeto de erro com uma propriedade 'error'
      }
   }

   const resetUserData = () => {
      setUserData({
         username: '',
         password: '',
         name: '',
         email: ''
      })
   }
   return (
      <div>
         <h2>Registro de Usuário</h2>
         <form>
            <label>
               Username:
               <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
               />
            </label>
            <br />
            <label>
               Password:
               <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
               />
            </label>
            <br />
            <label>
               Name:
               <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
               />
            </label>
            <br />
            <label>
               Email:
               <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
               />
            </label>
            <br />
            <button
               type="button"
               onClick={handleRegistration}
               onChange={resetUserData}
            >
               Salvar
            </button>
         </form>
         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
   )
}
