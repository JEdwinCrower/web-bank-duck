import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import img1 from "../assets/images/banner1.png";
import img2 from "../assets/images/banner2.png";
import img3 from "../assets/images/banner3.png";
import img4 from "../assets/images/banner4.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    // data-bs-theme="dark"
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <CarouselImage
          imgSrc={img1}
          text="La más atractiva del mercado hasta el 5%"
          title="Ahorros Patito hasta 5%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          imgSrc={img2}
          text="Facilitamos tus transacciones financieras dondequiera que estés"
          title="Banco Patito"
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          imgSrc={img3}
          text="Hacemos crecer tu dinero con nuestras opciones de inversión"
          title="Invierte con Banco Patito"
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          imgSrc={img4}
          text="Estamos aquí para apoyarte en cada paso de tu viaje financiero"
          title="Banco Patito - Tu socio financiero"
        />
        {/* <Carousel.Caption className="carousel-caption">
          <h3>Abre tu cuenta patito</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
