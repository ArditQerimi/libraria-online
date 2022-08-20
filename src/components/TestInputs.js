import React, { useState } from "react";
import className from "./TestInputs.module.css";

const TestInputs = ({
  title,
  img,
  category,
  author,
  handleTitle,
  handleImg,
  handleCategory,
  handleAuthor,
  onNewCard,
  categories,
}) => {
  return (
    <div
      style={{
        padding: 40,
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <select
        id="categories"
        value={category}
        onChange={(e) => handleCategory(e)}
      >
        <option value="choose" disabled selected="selected">
          -- Select category --
        </option>
        {categories.flat().map((category, i) => {
          return category.category.map((cat, i) => {
            return <option value={cat.title}>{cat.title}</option>;
          });
        })}
      </select>

      <input
        type="text"
        placeholder="title.."
        value={title}
        onChange={(e) => handleTitle(e)}
      />
      <input
        type="text"
        placeholder="image.."
        value={img}
        onChange={(e) => handleImg(e)}
      />
      <input
        type="text"
        placeholder="author.."
        value={author}
        onChange={(e) => handleAuthor(e)}
      />
      <div className={className.submitBtn} onClick={() => onNewCard()}>
        Submit
      </div>
    </div>
  );
};

export default TestInputs;
