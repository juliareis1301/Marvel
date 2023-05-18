import Carousel from 'react-bootstrap/Carousel';
import vingadores from '../../Imagens/Vingadores.webp'
import universoMarvel from  '../../Imagens/Universo_Marvel.webp'
import poster from '../../Imagens/poster.jpg';
import './Home.css'

function Home() {
  return (
    <div>
      <h1 className='title'>Welcome to the world of Marvel</h1>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={universoMarvel}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={vingadores}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={poster}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default Home;