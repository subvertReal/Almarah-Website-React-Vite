//bootstrap imports
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// page components
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//css import
import '../../src/styles/clothingGlobal.css'

import jsonData from '../../src/assets/api.json';

function ShalwarKameez(){
    const [imgArr, setImgArr] = useState([]);
    const navigate = useNavigate();

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
                    {imgArr.map((image) => (
                        <Col className='showcaseOneColumn' xs={12} sm={6} md={4} lg={3} key={image.id}>
                        
                        <Image onClick={() => navigate(`/product/${image.id}`)} className='showcaseoneimg'
                            src={`${jsonData.apiLink}/static/menClothing/shalwarKameez/${image.pic1}.webp`}
                            rounded
                        />

                        </Col>
                    ))}
                </Row>
                </Container>
            </div>
        </Container>

        <Footer />



    </>)


}

export default ShalwarKameez