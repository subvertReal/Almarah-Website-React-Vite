import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../src/styles/navbar.css'



function NavBar(){

    return(
        <Navbar id='nav' expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand  href="/"><img id='paanHutLogo' src=''></img></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                    
                    <NavDropdown title="Mens Clothing"  id="basic-nav-dropdown">
                        <NavDropdown.Item href="/shalwar-kameez">Shalwar Kameez</NavDropdown.Item>
                        <NavDropdown.Item href="/waistcoat">Waistcoats</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Groomswear"  id="basic-nav-dropdown">
                        <NavDropdown.Item href="/fancy-kurta">Fancy Kurtas</NavDropdown.Item>
                        <NavDropdown.Item href="/princecoat">Princecoats</NavDropdown.Item>
                        <NavDropdown.Item href="/sherwanis">Sherwanis</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Misc"  id="basic-nav-dropdown">
                        <NavDropdown.Item href="/caps">Caps</NavDropdown.Item>
                        <NavDropdown.Item href="/footwear">Footwear</NavDropdown.Item>
                        <NavDropdown.Item href="/shawls">Shawls</NavDropdown.Item>
                        <NavDropdown.Item href="/turban">Turban</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href='location' >Location</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
}

export default NavBar