// Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

// Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Assets
import jsonData from "../src/assets/api.json";
import lArrow from '../src/lArrow.png'
import rArrow from '../src/rArrow.png'
import '../src/styles/clothingGlobal.css'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function getProduct() {
            const response = await fetch(`${jsonData.apiLink}/products/api/${id}`);
            const data = await response.json();

            setProduct(data);
            setCount(0);
        }

        getProduct();
    }, [id]);

    if (!product) {
        return (
            <>
                <NavBar />
                <Container className="text-center py-5">
                    <Spinner />
                </Container>
                <Footer />
            </>
        );
    }

    const images = [
        product.pic1,
        ...(product.pic2 ? [product.pic2] : []),
        ...(product.pic3 ? [product.pic3] : []),
    ];

    const sizes = [
        { name: "Small", stock: product.sizeSmall },
        { name: "Medium", stock: product.sizeMedium },
        { name: "Large", stock: product.sizeLarge },
        { name: "XL", stock: product.sizeXL },
        { name: "2XL", stock: product.size2XL },
    ];

    function arrowBtnLeft() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function arrowBtnRight() {
        if (count < images.length - 1) {
            setCount(count + 1);
        }
    }

    return (
        <>
            <NavBar />

            <Container className="my-5">
                <Row >
                    {/* Images */}
                    <Col md={6} className="text-center">
                <div className="containerImage position-relative d-flex justify-content-center align-items-center">

                    <Image
                        src={`${jsonData.apiLink}/static/${product.category}/${product.clothingType}/${images[count]}.webp`}
                        fluid
                        rounded
                        className="border"
                    />

                    <button 
                        onClick={arrowBtnLeft} 
                        disabled={count === 0} 
                        className="arrowBtn arrowBtnLeft"
                    >
                        <img src={lArrow} alt="Previous" />
                    </button>

                    <button 
                        onClick={arrowBtnRight} 
                        disabled={count === images.length - 1} 
                        className="arrowBtn arrowBtnRight"
                    >
                        <img src={rArrow} alt="Next" />
                    </button>

                </div>
            </Col>
                    

                    {/* Product Details */}
                    <Col md={6}>
                        <h2>{product.name}</h2>

                        <p>
                            {product.desc || "No description available."}
                        </p>

                        <hr />

                        <h5>Available Sizes</h5>

                        <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center">
                            {sizes
                                .filter(size => size.stock !== null)
                                .map(size => (
                                    <div
                                        key={size.name}
                                        variant="outline-dark"
                                    >
                                        {size.name} ({size.stock})
                                    </div>
                                ))}
                        </div>

                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
}

export default Product;