import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import naruto from "../assests/naruto.jpg"

const ImageComponent = () => {
  return (
    <div>
      <Container>

        {/* Normal Image */}

        <Image src={require('../assests/naruto.jpg')}  />


        {/* LAYOUT->ROUNDED ROUNDEDCIRCLE thumbnail */}
           
           {/* ROUNDED  */}
          <Image src={naruto} rounded />

          {/* ROUNDEDCIRCLE */}
           {/*  <Image src="../assets/naruto.jpg" roundedCircle />     THIS METHOD DOESN'T WORK */}
           <Image src={require('../assests/naruto.jpg')} roundedCircle />

          {/* LITE BORDERING EFFECT */} 
          <Image src={require('../assests/naruto.jpg')} thumbnail />



          {/* TO MAKE THE IMAGE RESPONSIVE */}
          <Image src={require('../assests/naruto.jpg')} fluid />
          {/* when u put fluid it makes the image to work as responsive */}


          <a href='https://react-bootstrap.github.io/docs/components/images/'>Study image by click here :)</a>
    
  
    </Container>
    </div>
  );
};

export default ImageComponent;
