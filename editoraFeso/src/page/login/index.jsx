import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
   const [formData, setFormData] = useState({ username: '', password: '' })
   const [error, setError] = useState('')
   const navigation = useNavigate()

   const handleChange = e => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
      setError('')
   }
   const handleSubmit = async e => {
      e.preventDefault()

      try {
         const response = await axios.get('http://localhost:3000/users')
         const usersData = response.data
         const userMatch = usersData.find(
            user =>
               user.username === formData.username &&
               user.password === formData.password
         )
         if (userMatch) {
            localStorage.setItem('userData', JSON.stringify(userMatch));
            navigation('/home')
         } else {
            setError('Usuario ou senha erradas')
         }
      } catch (error) {
         console.error('Erro ao processar a requisição:', error)
      }
   }

   return (
      <div className="container">
         <h1 className="text-light bg-dark rounded-4 fs-2 p-3">
            Editora Unifeso
         </h1>
         <form
            className="bg-dark text-light d-flex flex-column p-3 rounded-4 align-center align-items-center justify-center "
            onSubmit={handleSubmit}
         >
            <div className="mb-3">
               <label className="m-2">Usuario</label>
               <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="mb-3">
               <label className="m-2">Senha</label>
               <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
               />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <Button variant="primary" type="submit" className="px-4 fs-4">
               Entrar
            </Button>

            <p className="mt-2 text-light fs-5">
               Não tem cadastro?{' '}
               <Link className="text-primary " to="/cadastro">
                  Clique aqui!
               </Link>
            </p>
         </form>
      </div>
   )
}
