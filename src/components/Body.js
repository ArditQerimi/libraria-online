import React, { useState, useEffect } from "react";
import Books from "./Books";
import Latest from "./Latest";
import Hero from "./Hero";
import Inputs from "./Inputs";
import axios from "axios";
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
  description,
  handleDescription,
  publisher,
  handlePublisher,
  category,
  setCategory,
  handleCategory,
  categories,
  lang,
  setLang,
  price,
  setPrice,
  handleLang,
  handlePrice,
  onSearchRemove,
  book,
  setBook,
}) => {
  return (
    <>
      <Hero
        latestBooks={latestBooks}
        setLatestBooks={setLatestBooks}
        // data={data}
        // searchTerm={searchTerm}
        // handleSearch={handleSearch}
        // setData={setData}
      />
      <Latest
        cards={cards}
        latestBooks={latestBooks}
        setLatestBooks={setLatestBooks}
        book={book}
      />
      <Books
        latestBooks={latestBooks}
        categories={categories}
        category={category}
        lang={lang}
        setLang={setLang}
        price={price}
        setPrice={setPrice}
        handleLang={handleLang}
        handlePrice={handlePrice}
        book={book}
      />
      <Inputs
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
        publisher={publisher}
        handlePublisher={handlePublisher}
        description={description}
        handleDescription={handleDescription}
        lang={lang}
        setLang={setLang}
        price={price}
        setPrice={setPrice}
        handleLang={handleLang}
        handlePrice={handlePrice}
        setBook={setBook}
      />
    </>
  );
};

export default Body;
