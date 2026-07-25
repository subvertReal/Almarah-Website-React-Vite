//bootstrap imports
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { useEffect, useState } from "react";


// assets
import '../../src/styles/ShowCaseOne.css'
import img1 from '../../src/1.png'
import jsonData from '../../src/assets/api.json';

function ShowCaseOne(){
    const [imgArr, setImgArr] = useState([]);

    useEffect(() => {
        // function accesses api, gets json, and puts them into imgArr
        async function getShowCaseData(){
    
            const response = await fetch(jsonData.apiLink+'/scan/showcase-one');

            let data = await response.json();
            
            setImgArr(data);

        }

        getShowCaseData();


    }, []);


    return(
        <>
            <Container className='container'>
            <div id='showcaseHeader'>Dress for Every Grand Occasion</div>
            <div id='showcaseText'>Celebrate life's finest moments with our exclusive collection of premium ethnic wear. Discover beautifully tailored kurtas, elegant sherwanis, and festive ensembles designed with luxurious fabrics and exceptional craftsmanship for every celebration.</div>
            
                <Row>
                    {imgArr.map((image, index) => (
                        <Col className='showcaseOneColumn' xs={12} sm={6} md={4} lg={3}>
                        
                        <Image className='showcaseoneimg' key={index}
                            src={`http://localhost:3000/static/ShowCaseOne/${image.name}`}
                            rounded
                        />

                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default ShowCaseOne;