import { useState } from 'react'
import { registerUser } from '../../api/api'

// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

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
      } catch (error) {
         console.error('Error during registration:', error)
         setErrorMessage('Erro ao fazer o cadastro')
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
         <h2 className="text-light bg-dark p-3 rounded-4">
            Registro de Usuário
         </h2>
         <form
            className="bg-dark text-light d-flex flex-column p-3 rounded-4 align-center align-items-center justify-center "
            onSubmit={handleRegistration}
         >
            <div className="mb-3">
               <label className="m-2">Usuario</label>
               <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                  required
               />
            </div>
            <div className="mb-3">
               <label className="m-2">Senha</label>
               <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  required
               />
            </div>
            <div className="mb-3">
               <label className="m-2">Nome</label>
               <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  required
               />
            </div>
            <div>
               <label className="m-2">Email</label>
               <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  required
               />
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <div className="m-2">
               <button type="button" className="btn btn-secondary mx-2 ">
                  <Link to="/" className="text-light">
                     {' '}
                     Voltar
                  </Link>
               </button>
               <button type="submit" className="btn btn-primary">
                  Salvar
               </button>
            </div>
         </form>
      </div>
   )
}
