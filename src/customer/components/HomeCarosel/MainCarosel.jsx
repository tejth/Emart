import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCaroselData } from "./MainCaroselData";
import "./MainCarosel.css"; // Import the CSS

const MainCarosel = () => {
  const items = mainCaroselData.map((item) => (
    <div className="carousel-item">
      <img
        className="carousel-image cursor-pointer"
        role="presentation"
        src={item.path}
        alt={item.image}
        style={{ width: "100%", height: "362.31px" }}
      />
    </div>
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarosel;
