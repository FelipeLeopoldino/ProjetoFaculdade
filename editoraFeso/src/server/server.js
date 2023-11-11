// server.js
import jsonServer from 'json-server'
import cors from 'cors'
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(cors())

// Rota de cadastro de usuário
server.post('/cadastro', (req, res) => {
   const { username, password, name, email } = req.body
   const users = router.db.get('users')
   const existingUser = users.find({ username }).value()

   if (existingUser) {
      res.status(400).json({ error: 'Usuario ja existe' })
   } else {
      const newUser = { username, password, name, email }
      users.push(newUser).write()
      res.json(newUser)
   }
})

// Rota de login
server.post('/', (req, res) => {
   const { username, password } = req.body
   const users = router.db.get('users')
   const user = users.find({ username, password }).value()

   if (user) {
      res.json({ message: 'Login successful' })
   } else {
      res.status(401).json({ error: 'Usuario ou senha incorretos' })
   }
})

server.use(router)

const PORT = 3000
server.listen(PORT, () => {
   console.log(`JSON Server is running on port ${PORT}`)
})
