import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
   const navigate = useNavigate()
   const storedUserData = localStorage.getItem('userData')
   const userData = JSON.parse(storedUserData)

   const handleLogout = () => {
      localStorage.removeItem('userData')
      navigate('/')
   }
   return (
      <Navbar
         bg="dark"
         data-bs-theme="dark"
         className="bg-body-tertiary fixed-top"
      >
         <Container>
            <Navbar.Brand>Editora Unifeso</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end text-white">
               <NavDropdown title={userData.name} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={handleLogout}>
                     Sair
                  </NavDropdown.Item>
               </NavDropdown>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
