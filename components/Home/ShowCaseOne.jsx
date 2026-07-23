//bootstrap imports
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { useEffect, useState } from "react";


// assets
import img1 from '../../public/1.png'
import jsonData from '../../src/assets/api.json';

function ShowCaseOne(){
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Image src={img1}  width={171} rounded />
                    </Col>
                    <Col>
                        <Image src={img1}  width={171} rounded />
                    </Col>
                    <Col>
                        <Image src={img1}  width={171} rounded />
                    </Col>
                    <Col>
                        <Image src={img1}  width={171} rounded />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ShowCaseOne;