import Container from 'react-bootstrap/esm/Container'
import storePage from '../../public/storePage.webp'

// assets
import lArrow from '../../public/lArrow.png'
import rArrow from '../../public/rArrow.png'


function ImageSlideshow () {

    return (
        <>  <div className='containerSlideshow'>
                <button className='slideShowBtn slideshowLeft'>
                    <img src={lArrow}></img>
                </button>
                <button  className='slideShowBtn slideshowRight'>
                    <img src={rArrow}></img>
                </button>
                <img id='storeSlideshow' src={storePage}></img>
            </div>


        </>
    )
}

export default ImageSlideshow