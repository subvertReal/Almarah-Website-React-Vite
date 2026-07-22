import Container from 'react-bootstrap/esm/Container'
import storePage1 from '../../public/slideshowAssets/1.webp'
import storePage2 from '../../public/slideshowAssets/2.webp'
import { useEffect, useState } from "react";


// assets
import lArrow from '../../public/lArrow.png'
import rArrow from '../../public/rArrow.png'
// const api = require('../../src/assets/api.json');
import jsonData from '../../src/assets/api.json';


function slideshowLeft(){
    let slideImg = document.getElementById('storeSlideshow');
    slideImg.src=storePage2;
}

function slideshowRight(){
    
}






function ImageSlideshow () {

    
    const [slideShowArr, setSlideShowArr] = useState();


    useEffect(() => {

        async function getSlideShowData(){
    
            console.log('Accessing api link: '+jsonData.apiLink);
            const response = await fetch(jsonData.apiLink+'/scan');

            return await response.text();

        }

        getSlideShowData();


    }, []);

    return (
        <div className='containerSlideshow'>
                 <button onClick={slideshowLeft} className='slideShowBtn slideshowLeft'>
                    <img src={lArrow}></img>
                 </button>
                 <button onClick={slideshowRight} className='slideShowBtn slideshowRight'>
                     <img src={rArrow}></img>
                 </button>
                 <img id='storeSlideshow' src={storePage1}></img>
             </div>
    );
}

export default ImageSlideshow