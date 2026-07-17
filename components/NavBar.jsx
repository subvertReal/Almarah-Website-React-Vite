import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../src/styles/navbar.css'



function NavBar(){

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand  href="/"><img id='paanHutLogo' src=''></img></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                    
                    <NavDropdown title="Mens Clothing"  id="basic-nav-dropdown">
                        <NavDropdown.Item href="/shalwar-kameez">Shalwar Kameez</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Kurtas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Waistcoats</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Groomswear"  id="basic-nav-dropdown">
                        <NavDropdown.Item href="/shalwar-kameez">Sherwanis</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Fancy Kurtas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Princecoats</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Misc"  id="basic-nav-dropdown">
                        <NavDropdown.Item href="/shalwar-kameez">Shawls</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Caps</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Qullas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Footwear</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href='location' >Location</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
}

export default NavBar