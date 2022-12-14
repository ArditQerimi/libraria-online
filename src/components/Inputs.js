import React, { useState } from "react";
import className from "./Inputs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { POST_BOOKS, EDIT_BOOK } from "../redux/types/types";
import { setBookSlice } from "../redux/slice/book";
import { postBooksSlice, editBookSlice } from "../redux/slice/books";

const Inputs = ({
  title,
  // img,
  category,
  author,
  description,
  price,
  lang,

  publisher,
  handleTitle,
  handleImg,
  handleCategory,
  handleAuthor,
  handleDescription,
  handlePublisher,
  handlePrice,
  handleLang,
  onNewCard,
  categories,
  setBook,
}) => {
  const book = useSelector((state) => state.book);
  // console.log(book);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    // console.log({ [event.target.name]: event.target.value });
    dispatch(
      setBookSlice({
        ...book,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = () => {
    dispatch({
      type: POST_BOOKS,
      book: { ...book, id: Math.random() },
    });

    dispatch(
      postBooksSlice({
        book: { ...book, id: Math.random() },
      })
    );

    dispatch(
      setBookSlice({
        id: 0,
        title: "",
        image: "",
      })
    );
  };

  const onEditCard = (book, id) => {
    const newobj = {
      ...book,
      title: book.title,
      image: book.image,
    };
    dispatch(editBookSlice(newobj));
    dispatch({
      type: EDIT_BOOK,
      id,
      newobj,
    });
    dispatch(
      setBookSlice({
        id: 0,
        title: "",
        image: "",
      })
    );
  };
  return (
    <div
      style={{
        padding: 40,
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <select
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
      </select> */}

      <input
        type="text"
        placeholder="title.."
        name="title"
        value={book.title}
        onChange={handleChange}
        // onChange={(e) => handleTitle(e)}
      />
      <input
        type="text"
        placeholder="image.."
        name="image"
        value={book.image}
        onChange={handleChange}
      />
      {/* <input
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
      <input
        type="text"
        placeholder="description.."
        value={description}
        onChange={(e) => handleDescription(e)}
      />
      <input
        type="text"
        placeholder="publisher.."
        value={publisher}
        onChange={(e) => handlePublisher(e)}
      />
      <input
        type="price"
        placeholder="price.."
        value={price}
        onChange={(e) => handlePrice(e)}
      />

      <div>
        <label for="languague">Language:</label>
        <select
          id="language"
          name="language"
          value={lang}
          onChange={(e) => handleLang(e)}
        >
          <option>Select languague</option>
          <option value="english">English</option>
          <option value="albanian">Albanian</option>
        </select>
      </div> */}
      <div
        className={className.submitBtn}
        onClick={
          book.id === 0
            ? () => handleSubmit()
            : () => onEditCard(book, book._id)
        }
        // onClick={() => onNewCard()}
      >
        Save
      </div>
    </div>
  );
};

export default Inputs;
