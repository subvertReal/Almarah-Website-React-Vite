import Container from 'react-bootstrap/esm/Container'
import storePage1 from '../../public/slideshowAssets/1.webp'
import storePage2 from '../../public/slideshowAssets/2.webp'

// assets
import lArrow from '../../public/lArrow.png'
import rArrow from '../../public/rArrow.png'


function slideshowLeft(){
    let slideImg = document.getElementById('storeSlideshow');
    slideImg.src=storePage2;
}

function slideshowRight(){
    
}

function ImageSlideshow () {

    return (
        <>  <div className='containerSlideshow'>
                <button onClick={slideshowLeft} className='slideShowBtn slideshowLeft'>
                    <img src={lArrow}></img>
                </button>
                <button onClick={slideshowRight} className='slideShowBtn slideshowRight'>
                    <img src={rArrow}></img>
                </button>
                <img id='storeSlideshow' src={storePage1}></img>
            </div>


        </>
    )
}

export default ImageSlideshow