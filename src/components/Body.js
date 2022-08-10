import React from "react";
import CardCarousel from "./CardCarousel";
import HeroSection from "./HeroSection";

const Body = ({ cards, latestBook }) => {
  return (
    <>
      <HeroSection />
      <CardCarousel cards={cards} latestBook={latestBook} />
    </>
  );
};

export default Body;
