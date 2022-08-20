import React from "react";
import AllBooks from "./AllBooks";
import CardCarousel from "./CardCarousel";
import HeroSection from "./HeroSection";
import TestInputs from "./TestInputs";

const Body = ({
  cards,
  latestBooks,
  setLatestBooks,
  onNewCard,
  title,
  handleTitle,
  img,
  handleImg,
  author,
  handleAuthor,

  category,
  setCategory,
  handleCategory,
  categories,
}) => {
  return (
    <>
      <HeroSection />
      <CardCarousel
        cards={cards}
        latestBooks={latestBooks}
        setLatestBooks={setLatestBooks}
      />
      <AllBooks
        latestBooks={latestBooks}
        categories={categories}
        category={category}
      />
      <TestInputs
        onNewCard={onNewCard}
        title={title}
        handleTitle={handleTitle}
        img={img}
        handleImg={handleImg}
        category={category}
        setCategory={setCategory}
        handleCategory={handleCategory}
        categories={categories}
        author={author}
        handleAuthor={handleAuthor}
      />
    </>
  );
};

export default Body;
