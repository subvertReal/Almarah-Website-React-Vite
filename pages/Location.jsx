import mapImage from '../src/map.webp'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import NavBar from '../components/NavBar'

import '../src/App.css'
import Footer from '../components/Footer';

function Location(){
    return <>
    <NavBar />

    <Container className='footerPadBottom' >
    <div className='headerClothingGlobal headerWhitespaceClothingGlobal'>Visit Our Store Location!</div>
      <Row className="align-items-center justify-content-center">
        <Col>
          <Image id='map' src={mapImage} ></Image>
        </Col>
      </Row>
      <Row className='align-items-center justify-content-center'>
        <Col xs={12} md={6} className="align-items-left">
          <button onClick={() => window.open('https://maps.app.goo.gl/AtwbwmaT1MqWV3Jz6', '_blank')} id="btnDir">Click for Directions</button>
        </Col>
        <Col xs={12} md={6} className='text-middle'>
          <h2 className='fontApply'>Our Store Address</h2>
          <div className='fontApply'>38 Tulip Drive Brampton, L6Y 3W2
          <br></br>Phone: +1 905 497 4684 </div>
          <br></br>
          <h2 className='fontApply'>Store Hours</h2>
          <div className='fontApply'>Monday - Friday: 10:00 AM - 10:00 PM<br></br>
Saturday: 10:00 AM - 10:00 PM<br></br>
Sunday: 10:00 AM - 10:00 PM </div>

        </Col>

      </Row>
    </Container>
    
    <Footer />

    </>
}

export default Location