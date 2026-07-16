import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../src/styles/navbar.css'



function NavBar(){

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand  href="/"><img id='paanHutLogo' src=''></img></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" id='text'>Home</Nav.Link>
                    <Nav.Link href="products" id='text'>Products</Nav.Link>
                    <Nav.Link href='location' id='text'>Location</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
}

export default NavBar