import React, { useEffect, useState } from "react";
import classes from "./Books.module.css";
import {
  ImStarEmpty,
  ImStarFull,
  ImStarHalf,
  ImBoxRemove,
} from "react-icons/im";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_BOOK, EDIT_BOOK } from "../redux/types/types";
import { deleteBookSlice, editBookSlice } from "../redux/slice/books";
import { setBookSlice } from "../redux/slice/book";

const Books = ({
  latestBooks,
  categories,
  category,
  handleLang,
  handlePrice,
  lang,
  price,
  book,
}) => {
  const rows = useSelector((state) => state.book);
  // console.log(rows);

  const dispatch = useDispatch();

  const onDeleteCard = (id) => {
    console.log(id);
    dispatch(deleteBookSlice(id));
    dispatch({
      type: DELETE_BOOK,
      id,
    });
  };

  const [img, setImg] = useState("");

  const [title, setTitle] = useState("");
  const handleTitle = (title) => {
    setTitle(title);
  };

  const onEditCard = (book, id) => {
    const newobj = {
      ...book,
      title: title,
      image: img,
    };
    dispatch(editBookSlice(newobj));
    dispatch({
      type: EDIT_BOOK,
      id,
      newobj,
    });
  };

  const [changeIndex, setChangeIndex] = useState(1);

  const increase = () => {
    setChangeIndex((prevState) => {
      if (prevState >= categories.length - 1) return (prevState = 0);
      else return (prevState += 1);
    });
  };

  const decrease = () => {
    setChangeIndex((prevState) => {
      if (prevState < 1) return (prevState = categories.length - 1);
      else return (prevState -= 1);
    });
  };

  const [addToFav, setAddToFav] = useState(false);

  const addToFavHandler = () => {
    setAddToFav(!addToFav);
  };

  const newBooksArr = [...latestBooks].reverse();
  // console.log(newBooksArr);

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const [filteredBooks, setFilteredBooks] = useState(newBooksArr);
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  // console.log(filteredBooks);
  // console.log(currentBooks);
  const howManyPages = Math.ceil(filteredBooks.length / booksPerPage);

  let pages = howManyPages;

  // console.log("pages", pages);

  // console.log(currentBooks);
  // console.log(filteredBooks);

  useEffect(() => {
    setFilteredBooks(newBooksArr);
  }, [latestBooks]);

  const handleCatFilter = (category) => {
    const filter = newBooksArr?.filter(
      (cat) => category != null && cat.category === category.title
      // typeof category != "undefined" ? cat.category === category.title : cat
    );
    setFilteredBooks(filter);
  };

  const onReset = () => {
    setFilteredBooks(newBooksArr);
  };

  const [keyword, setKeyword] = useState("");
  const handleKeyword = (keyword) => {
    setKeyword(keyword);
  };

  const [author, setAuthor] = useState("");
  const handleAuthor = (author) => {
    setAuthor(author);
  };

  const [publisher, setPublisher] = useState("");
  const handlePublisher = (publisher) => {
    setPublisher(publisher);
  };

  const onSearch = () => {
    if (
      keyword !== "" ||
      author !== "" ||
      title !== "" ||
      publisher !== "" ||
      lang.length > 0 ||
      price.length > 0
    ) {
      const searchedKeyword = newBooksArr.filter((book) =>
        book.description.toLowerCase().includes(keyword.toLowerCase().trim())
      );
      const searchedAuthor = newBooksArr.filter((book) =>
        book.author.toLowerCase().includes(author.toLowerCase().trim())
      );
      const searchedTitle = newBooksArr.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase().trim())
      );
      const searchedPublisher = newBooksArr.filter((book) =>
        book.publisher.toLowerCase().includes(publisher.toLowerCase().trim())
      );

      const chooseLang = newBooksArr.filter((book) =>
        book.lang
          .toLowerCase()
          .includes(lang !== "empty" ? lang.toLowerCase().trim() : "")
      );

      const data = [
        searchedKeyword,
        searchedAuthor,
        searchedTitle,
        searchedPublisher,
        chooseLang,
      ];
      const result = data.reduce((acc, cur) =>
        acc.filter((word) => cur.includes(word))
      );

      const priceSort = result.sort((a, b) => {
        if (price !== "highest") {
          return a.price - b.price;
        } else if (price !== "lowest") {
          return b.price - a.price;
        } else {
          return setFilteredBooks(newBooksArr);
        }
      });

      // console.log(priceSort.map((p) => p.price));

      setFilteredBooks(priceSort);
    }
  };

  const numberOfBooks = [];

  for (let i = 1; i <= pages; i++) {
    numberOfBooks.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    onSearch();
  }, []);

  useEffect(() => {
    let tempNumberOfBooks = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfBooks.length < 6) {
      tempNumberOfBooks = numberOfBooks;
      // console.log(`numberOfBooks.length < 6: ${numberOfBooks.length < 6}`);
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfBooks = [1, 2, 3, 4, dotsInitial, numberOfBooks.length];
      // console.log(`numberOfBooks.length: ${numberOfBooks.length}`);
      // console.log(
      //   `currentButton >= 1 && currentButton <= 3:${
      //     currentButton >= 1 && currentButton <= 3
      //   }`
      // );
    } else if (currentButton === 4) {
      const sliced = numberOfBooks.slice(0, 5);
      tempNumberOfBooks = [...sliced, dotsInitial, numberOfBooks.length];
      // console.log(`currentButton === 4: ${currentButton === 4}`);
      // console.log(`numberOfBooks.length: ${numberOfBooks.length}`);
    } else if (currentButton > 4 && currentButton < numberOfBooks.length - 2) {
      // console.log(
      //   `currentButton > 4 && currentButton < numberOfBooks.length - 2: ${
      //     currentButton > 4 && currentButton < numberOfBooks.length - 2
      //   }`
      // );
      // console.log(`numberOfBooks.length: ${numberOfBooks.length}`);
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numberOfBooks.slice(currentButton - 2, currentButton); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfBooks.slice(currentButton, currentButton + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfBooks = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfBooks.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentButton > numberOfBooks.length - 3) {
      // > 7
      const sliced = numberOfBooks.slice(numberOfBooks.length - 4); // slice(10-4)
      tempNumberOfBooks = [1, dotsLeft, ...sliced];
      // console.log(
      //   `currentButton > numberOfBooks.length - 3: ${
      //     currentButton > numberOfBooks.length - 3
      //   }`
      // );
    } else if (currentButton === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
      // console.log(
      //   ` currentButton === dotsInitial: ${currentButton === dotsInitial}`
      // );
    } else if (currentButton === dotsRight) {
      // console.log(
      //   `currentButton === dotsRight: ${currentButton === dotsRight}`
      // );
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      // console.log(`currentButton === dotsLeft: ${currentButton === dotsLeft}`);
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfBooks);
    setCurrentPage(currentButton);
  }, [currentButton, latestBooks, filteredBooks]);

  return (
    <div className={classes.all_books__container}>
      <div className={classes.books_filter__container}>
        <div className={classes.empty__container}></div>
        <div className={classes.search__container}>
          <div className={classes.inputs__container}>
            <div className={classes.inputs}>
              <h3 className={classes.search__title}>Search</h3>
              <div className={classes.input__container}>
                <label for="keywords" className={classes.label}>
                  Keyword:{" "}
                </label>
                <input
                  className={classes.input}
                  name="keywords"
                  id="keyword"
                  type="text"
                  placeholder="Keyword"
                  value={keyword}
                  onChange={(e) => handleKeyword(e.target.value)}
                />
              </div>
              <div className={classes.input__container}>
                <label for="author" className={classes.label}>
                  Author:{" "}
                </label>
                <input
                  className={classes.input}
                  name="author"
                  id="author"
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => handleAuthor(e.target.value)}
                />
              </div>
              <div className={classes.input__container}>
                <label for="title" className={classes.label}>
                  Title:{" "}
                </label>
                <input
                  className={classes.input}
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => handleTitle(e.target.value)}
                />
              </div>
              <div className={classes.input__container}>
                <label for="publisher" className={classes.label}>
                  Publisher:{" "}
                </label>
                <input
                  className={classes.input}
                  name="publisher"
                  id="publisher"
                  type="text"
                  placeholder="Publisher"
                  value={publisher}
                  onChange={(e) => handlePublisher(e.target.value)}
                />
              </div>

              <div className={classes.options__container}>
                <div>
                  <label for="price" className={classes.select__label}>
                    Price:
                  </label>
                  <select
                    id="price"
                    name="price"
                    className={classes.select__input}
                    value={price}
                    onChange={(e) => handlePrice(e)}
                    // onClick={(e) => onSelectPrice(e.target.value)}
                  >
                    <option className={classes.option__input}>
                      Sort by price
                    </option>
                    <option value="lowest" className={classes.option__input}>
                      Lowest
                    </option>
                    <option value="highest" className={classes.option__input}>
                      Highest
                    </option>
                  </select>
                </div>
                <div>
                  <label for="languague" className={classes.select__label}>
                    Language:
                  </label>
                  <select
                    id="language"
                    name="language"
                    className={classes.select__input}
                    value={lang}
                    onChange={(e) => handleLang(e)}
                  >
                    <option value="empty" className={classes.option__input}>
                      Select languague
                    </option>
                    <option value="english">English</option>
                    <option value="albanian">Albanian</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.search_buttons__container}>
            <div className={classes.search_btn__container} onClick={onSearch}>
              <div className={classes.search__btn}>Search</div>
            </div>
            <div className={classes.reset_btn__container} onClick={onReset}>
              <div className={classes.reset__btn}>Reset</div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.books__container}>
        <h3 className={classes.categories__title}>Categories</h3>
        <div className={classes.categories__container}>
          <img
            className={classes.carousel_btn}
            onClick={decrease}
            src="https://img.icons8.com/ios-glyphs/30/d61c4e/left-squared.png"
          />

          {categories?.map((category, index) => {
            return (
              index === changeIndex &&
              category.category.map((category, index) => {
                return (
                  <div className={classes.categories_carousel__container}>
                    <div
                      key={index}
                      className={classes.category__container}
                      onClick={(e) => handleCatFilter(category)}
                    >
                      <div className={classes.category}>{category.title}</div>
                    </div>
                  </div>
                );
              })
            );
          })}

          <img
            className={classes.carousel_btn}
            onClick={increase}
            src="https://img.icons8.com/ios-glyphs/30/d61c4e/right-squared.png"
          />
        </div>
        <div className={classes.categories__list}>
          {categories?.map((category, index) => {
            return category.category.map((category, index) => {
              return (
                <div className={classes.categories__container_resize_mode}>
                  <div
                    key={index}
                    className={classes.category__container_resize_mode}
                    onClick={(e) => handleCatFilter(category)}
                  >
                    <div className={classes.category}>{category.title}</div>
                  </div>
                </div>
              );
            });
          })}
        </div>
        <div className={classes.books}>
          <div className={classes.books_list}>
            <div className={classes.books_cards}>
              {currentBooks.map((book, index) => {
                return (
                  <div
                    key={index}
                    className={classes.book_card_big__container}
                    // onClick={() => onDeleteCard(book._id)}
                  >
                    <div className={classes.read_more__button__container}>
                      <div
                        className={classes.read_more_btn}
                        onClick={() => onEditCard(book, book._id)}
                      >
                        Read More
                      </div>
                      {/* <div style={{ display: "flex", flexDirection: "column" }}>
                        <input
                          type="text"
                          placeholder="title"
                          value={title}
                          onChange={(e) => handleTitle(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="img"
                          value={img}
                          onChange={(e) => setImg(e.target.value)}
                        />
                      </div> */}
                    </div>
                    <div className={classes.book_card__container}>
                      <div className={classes.image__container}>
                        <img src={book.image} className={classes.card__image} />
                        <div className={classes.overlay}></div>
                        <div className={classes.add_to_fav_box}>
                          {!addToFav ? (
                            <BsHeart
                              onClick={addToFavHandler}
                              className={classes.add_to_fav}
                            />
                          ) : (
                            <BsFillHeartFill
                              onClick={addToFavHandler}
                              className={classes.add_to_fav}
                            />
                          )}
                          <MdDelete
                            onClick={() => onDeleteCard(book._id)}
                            className={classes.delete_card}
                          />
                          <MdEdit
                            onClick={() => dispatch(setBookSlice(book))}
                            // onClick={() => onDeleteCard(book._id)}
                            className={classes.edit_card}
                          />
                        </div>
                        {/* <div
                          className={classes.delete_card}
                          onClick={onDeleteCard}
                        ></div> */}
                      </div>
                      <div className={classes.description__container}>
                        <div className={classes.title}>{book.title}</div>
                        {typeof book.rating !== "undefined" ? (
                          book.rating !== 0 && (
                            <div className={classes.rating}>
                              {[...Array(Math.floor(book.rating))].map(
                                (star, index) => {
                                  return (
                                    <div key={`${book.id}-${index}`}>
                                      <ImStarFull className={classes.star} />
                                    </div>
                                  );
                                }
                              )}

                              {Math.round(
                                book.rating - Math.floor(book.rating)
                              ) > 0.5 ? (
                                [
                                  ...Array(
                                    Math.round(
                                      book.rating - Math.floor(book.rating)
                                    )
                                  ),
                                ].map((star, index) => {
                                  return (
                                    <div key={`${book.id}-${index}`}>
                                      <ImStarHalf className={classes.star} />
                                    </div>
                                  );
                                })
                              ) : (
                                <ImStarEmpty className={classes.star} />
                              )}

                              {[
                                ...Array(
                                  Math.floor(
                                    5 -
                                      (book.rating - Math.floor(book.rating)) -
                                      Math.floor(book.rating)
                                  )
                                ),
                              ].map((star, index) => {
                                return (
                                  <div key={`${book.id}-${index}`}>
                                    <ImStarEmpty className={classes.star} />
                                  </div>
                                );
                              })}
                              <div className={classes.rating_number}>
                                {book.rating}({book.ratings})
                              </div>
                            </div>
                          )
                        ) : (
                          <></>
                        )}
                        <div className={classes.posted_by}>
                          Posted by:{" "}
                          <span className={classes.posted_by_name}>
                            {book.posted_by}
                          </span>
                        </div>
                        <div className={classes.posted_date__container}>
                          Date:{" "}
                          <span className={classes.posted_date}>
                            {book.date}
                          </span>
                        </div>
                        <div className={classes.reviews_container}>
                          Reviews:{" "}
                          <span className={classes.no_reviews}>
                            {book.reviews}
                          </span>
                        </div>
                        {/* {book.price}
                        <div>{book.lang}</div> */}
                        {/* <div className={classes.reviews_container}>
                            Category:{" "}
                            <span className={classes.no_reviews}>
                              {book.category}
                            </span>
                          </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// */}

        <div className={classes.pagination__container}>
          {arrOfCurrButtons.map((item, index) => {
            return (
              <div
                key={index}
                className={classes.pagination_number__container}
                onClick={() => setCurrentButton(item)}
              >
                <a
                  key={item}
                  className={classes.pagination__number}
                  href=""
                  target="_blank"
                >
                  {item}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Books;