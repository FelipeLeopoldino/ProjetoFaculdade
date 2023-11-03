import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavBar() {
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
               <NavDropdown title="Felipe Leopoldino" id="basic-nav-dropdown">
                  <NavDropdown.Item>Sair</NavDropdown.Item>
               </NavDropdown>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
