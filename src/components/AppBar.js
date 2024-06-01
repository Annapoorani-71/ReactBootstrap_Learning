import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const AppBar = () => {
  return (
    <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                  <h2 className='text-primary'>
                    <span>
                    <i class="bi bi-yelp"></i>
                            PIZZA SHOP 
                    </span>
                  </h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav >
                    <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
                    <Nav.Link href="#menu"  className='fw-bold'>Menu</Nav.Link>
                    <Nav.Link href="#musttry" className='fw-bold'>Must Try</Nav.Link>
                    <Nav.Link href="#contactus" className='fw-bold'>Contact us</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </div>
  )
}

export default AppBar