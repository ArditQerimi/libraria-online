import React from "react";
import CardCarousel from "./CardCarousel";
import HeroSection from "./HeroSection";
import { cardsData } from "./MainPageData";

const Body = () => {
  return (
    <>
      <HeroSection />
      <CardCarousel data={cardsData} />
    </>
  );
};

export default Body;
