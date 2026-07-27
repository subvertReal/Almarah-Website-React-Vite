//bootstrap imports
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// page components
import NavBar from "../NavBar"
import Footer from "../Footer"

import { useEffect, useState } from "react";

//css import
import '../../src/styles/menClothing/ShalwarKameez.css'
import '../../src/styles/clothingGlobal.css'

import jsonData from '../../src/assets/api.json';

function ShalwarKameez(){
    const [imgArr, setImgArr] = useState([]);

    useEffect(() => {
        // function accesses api, gets json, and puts them into imgArr
        async function getShowCaseData(){
    
            const response = await fetch(jsonData.apiLink+'/scan/shalwar-kameez');

            let data = await response.json();
            
            setImgArr(data);

        }

        getShowCaseData();


    }, []);
    return (<>
         <NavBar />

        <Container>
            <div className='headerWhitespaceClothingGlobal'>
                <div className='headerClothingGlobal'>Shalwar Kameez</div>
                <Container>
                    <Row>
                    {imgArr.map((image, index) => (
                        <Col className='showcaseOneColumn' xs={12} sm={6} md={4} lg={3}>
                        
                        <Image className='showcaseoneimg' key={index}
                            src={`http://localhost:3000/static/menClothing/shalwarKameez/${image.name}`}
                            rounded
                        />

                        </Col>
                    ))}
                </Row>
                </Container>
            </div>
        </Container>



    </>)


}

export default ShalwarKameez