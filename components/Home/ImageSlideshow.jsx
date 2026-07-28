import { useEffect, useState } from "react";

// assets
import lArrow from '../../src/lArrow.png'
import rArrow from '../../src/rArrow.png'
import jsonData from '../../src/assets/api.json';

function ImageSlideshow () {
    const [slideShowArr, setSlideShowArr] = useState(); // store names of images of the slideshow for the url
    const [count, setCount] = useState(0); // keeps track of the current image in slideShowArr

    function slideshowLeft(){ // moves slideshow to the left

        if(count-1 >= 0){
            let slideImg = document.getElementById('storeSlideshow');
                setCount(prev => {
                const newCount = prev - 1;
                slideImg.src=`${jsonData.apiLink}/static/slideshow/${slideShowArr[newCount]}`;
                
                return newCount;
            });
        }
    }   

    function slideshowRight(){ // moves slideshow to the right

        if(count+1 <= slideShowArr.length-1){
            let slideImg = document.getElementById('storeSlideshow');
                setCount(prev => {
                const newCount = prev + 1;
                slideImg.src=`${jsonData.apiLink}/static/slideshow/${slideShowArr[newCount]}`;
                
                return newCount;
            });
        }        
    } 

    useEffect(() => {
        // function accesses api, finds out image names, creates an array with those names, and sets them in a useState
        async function getSlideShowData(){
    
            console.log('Accessing api link: '+jsonData.apiLink);
            const response = await fetch(jsonData.apiLink+'/scan/slideshow');

            let data = await response.json();
   
            let slideImg = document.getElementById('storeSlideshow');

            slideImg.src=`${jsonData.apiLink}/static/slideshow/${data[0]["name"]}`; //sets the first image as the slideshow as a default
            let arr = []
            let i =0;
            while(i in data){
   
                arr.push(data[i]["name"])

                i++;
            }

            setSlideShowArr(arr);


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
                 <img id='storeSlideshow'></img>
             </div>
    );
}

export default ImageSlideshow