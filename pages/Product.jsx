//bootstrap imports
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// page components
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// assets
import jsonData from '../src/assets/api.json'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product(){
    const { id } = useParams();


    const [imgArr, setImgArr] = useState([]);

    useEffect(() => {
        // function accesses api, gets json, and puts them into imgArr
        async function getShowCaseData(){
    
            const response = await fetch(jsonData.apiLink+'/products/'+id);

            let data = await response.json();
            
            setImgArr(data);

        }

        getShowCaseData();


    }, []);
    return(
        <>
            <NavBar />
            {/* <div>prop id output {id}</div> */}
            




            <Footer />
        </>
    )
}

export default Product;