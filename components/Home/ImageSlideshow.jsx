import Container from 'react-bootstrap/esm/Container'
import storePage from '../../public/storePage.webp'


function ImageSlideshow () {

    return (
        <>  <Container className='containerSlideshow'>
                <button className='slideshowLeft'>testL</button>
                <button className='slideshowRight'>testR</button>
                <img id='storeSlideshow' src={storePage}></img>
            </Container>


        </>
    )
}

export default ImageSlideshow