import * as React from "react";
import Image from "react-bootstrap/Image";

export interface CarouselImageProps {
  title?: string | undefined;
  text: string;
  imgSrc: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({
  title = "Placeholder",
  text,
  imgSrc,
}) => (
  <div
    style={{
      position: "relative",
      height: "93vh",
      width: "100vw",
      background: "radial-gradient(circle, #1512bd 0%, #03010c 100%)",
    }}
  >
    <Image
      src={imgSrc}
      alt={`${title}: ${text}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        objectFit: "cover",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        transform: "translate(-50%, -50%)",
        color: "#ffffff",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: "45px 25px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h1 className="title-carousel-image">{title}</h1>
      <p className="subtitle-carousel-image">{text}</p>
    </div>
  </div>
);

CarouselImage.displayName = "CarouselImage";

export default CarouselImage;
