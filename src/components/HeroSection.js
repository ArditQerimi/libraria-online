import React from "react";
import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={classes.hero__container}>
      <div className={classes.hero__search__container}>
        <div className={classes.hero__title}>
          What book are you looking for?
        </div>
        <div className={classes.hero__description}>
          Not sure what to read next? Explore our catalog of Public Domain Books
          with Our Editors
        </div>
        <div className={classes.searchbtn__container}>
          <input
            type="text"
            placeholder="Search for your book.."
            className={classes.search__input}
          />
          <div className={classes.search__button}>Search</div>
        </div>
      </div>
      <div className={classes.hero__img__container}>
        <img
          src={
            "https://media.istockphoto.com/photos/bookshelves-and-laptops-are-placed-on-the-library-deskelearning-class-picture-id1177967778?k=20&m=1177967778&s=612x612&w=0&h=ZN9cQR6jog3wcWDsB5bUIqLRi_pLCr1Er7p6UioAQ8E="
          }
          className={classes.hero__img}
          alt="hero__img"
        ></img>
      </div>
    </div>
  );
};

export default HeroSection;
