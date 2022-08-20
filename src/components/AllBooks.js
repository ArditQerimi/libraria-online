import React, { useEffect, useState } from "react";
import classes from "./AllBooks.module.css";
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

const allbooks = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/R.41baa82b36bd0ba73276ce6949c1363d?rik=LstEQ0ttBX5jRg&pid=ImgRaw&r=0",
    title: "Chemistry Science",
    rating: 3.3,
    ratings: 140,
    posted_by: "Ardit Qerimi",
    date: "13/08/2022",
    reviews: 30,
    category: "Comic",
  },
  {
    id: 2,
    image:
      "https://n2.sdlcdn.com/imgs/i/q/9/Textbook-Of-Physical-Chemistry-Vol-SDL770161936-1-f60d3.jpg",
    title: "Physical Chemistry ",
    rating: 3.5,
    ratings: 164,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 35,
    category: "Comic",
  },
  {
    id: 3,
    image:
      "https://covers.zlibcdn2.com/covers/books/96/a4/c0/96a4c00f81adf50278329fd9cb1a6772.jpg",
    title: "Indroductory Chemistry ",
    rating: 3.55,
    ratings: 156,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 63,
    category: "Comic",
  },
  {
    id: 4,
    image:
      "https://www.wisemansbookstrading.com/wp-content/uploads/2019/05/HANDBOOK-MANUAL-IN-FORENSIC-CHEMISTRY.jpg",
    title: "Forensic Chemistry ",
    rating: 3.95,
    ratings: 186,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 83,
    category: "Science",
  },
  {
    id: 5,
    image:
      "https://gcecompilation.com/wp-content/uploads/2017/11/chemistry-696x918.jpg",
    title: "Chemistry Matters ",
    rating: 4.2,
    ratings: 136,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 94,
    category: "Science",
  },
  {
    id: 6,
    image:
      "https://th.bing.com/th/id/R.56693c2ba815cdaedfa350e95dbef296?rik=9dRrhH2jYMnfpg&riu=http%3a%2f%2fimages.amazon.com%2fimages%2fP%2f0134347765.01.LZZZZZZZ.jpg&ehk=J8CtKr4OUXFKViFv8D6IdBzZc8DGBc6cLB5t0QIqHjM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    title: "Chemistry",
    rating: 4.6,
    ratings: 130,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 56,
    category: "Science",
  },

  {
    id: 7,
    image:
      "https://th.bing.com/th/id/R.56693c2ba815cdaedfa350e95dbef296?rik=9dRrhH2jYMnfpg&riu=http%3a%2f%2fimages.amazon.com%2fimages%2fP%2f0134347765.01.LZZZZZZZ.jpg&ehk=J8CtKr4OUXFKViFv8D6IdBzZc8DGBc6cLB5t0QIqHjM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    title: "Chemistry",
    rating: 4.1,
    ratings: 130,
    posted_by: "Ardit Qerimi",
    date: "12/08/2022",
    reviews: 56,
    category: "Science",
  },
];

const AllBooks = ({ latestBooks, categories, category }) => {
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

  // const filterCategory = () => {
  //   // console.log(
  //   //   latestBooks.map((category) =>
  //   //     category.category.filter((cat) => cat.title === category)
  //   //   )
  //   // );
  //   console.log(latestBooks.filter((cat) => cat.category === category));
  //   return latestBooks.filter((cat) => cat.category === category);
  // };
  // filterCategory();

  const [addToFav, setAddToFav] = useState(false);

  const addToFavHandler = () => {
    setAddToFav(!addToFav);
  };

  const newBooksArr = [...latestBooks].reverse();

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const [filteredBooks, setFilteredBooks] = useState(newBooksArr);
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  console.log(filteredBooks);
  const howManyPages = Math.ceil(filteredBooks.length / booksPerPage);

  let pages = howManyPages;

  console.log("pages", pages);

  // console.log(currentBooks);
  // console.log(filteredBooks);

  useEffect(() => {
    setFilteredBooks(newBooksArr);
  }, [latestBooks]);

  const handleCatFilter = (category) => {
    const filter = currentBooks?.filter(
      (cat) => category != null && cat.category === category.title
      // typeof category != "undefined" ? cat.category === category.title : cat
    );
    setFilteredBooks(filter);
  };

  const onReset = () => {
    setFilteredBooks(currentBooks);
  };

  const [keyword, setKeyword] = useState("");
  const handleKeyword = (keyword) => {
    setKeyword(keyword);
  };

  const onSearch = () => {
    // console.log(keyword);
    // const filter = currentBooks?.filter(
    //   // (word) => keyword != null && word.title.toLowerCase() === keyword
    //   (word) => console.log(`${word.title.toLowerCase()} === ${keyword}`)
    // );
    // console.log(filter);
    // setFilteredBooks(filter);
    // e.preventDefault();
    const searchedKeyword = currentBooks.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase().trim())
    );
    // console.log(searchedKeyword);
    setFilteredBooks(searchedKeyword);
  };

  const numberOfBooks = [];

  for (let i = 1; i <= pages; i++) {
    numberOfBooks.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

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
                  >
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
                  >
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

          {/* <FaChevronRight /> */}
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
              {/* {console.log(
                typeof filteredBooks !== "undefined"
                  ? filteredBooks
                  : currentBooks
              )}
              {console.log(filteredBooks)} */}
              {
                // (filteredBooks.length > 0 ? filteredBooks : currentBooks)
                currentBooks.map((book, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.book_card_big__container}
                    >
                      <div className={classes.read_more__button__container}>
                        <div className={classes.read_more_btn}>Read More</div>
                      </div>
                      <div className={classes.book_card__container}>
                        <div className={classes.image__container}>
                          <img
                            src={book.image}
                            className={classes.card__image}
                          />
                          <div className={classes.overlay}></div>
                          <div
                            className={classes.add_to_fav_box}
                            onClick={addToFavHandler}
                          >
                            {!addToFav ? (
                              <BsHeart className={classes.add_to_fav} />
                            ) : (
                              <BsFillHeartFill className={classes.add_to_fav} />
                            )}
                          </div>
                        </div>
                        <div className={classes.description__container}>
                          <div className={classes.title}>{book.title}</div>
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

                            {Math.round(book.rating - Math.floor(book.rating)) >
                            0.5 ? (
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
                })
              }
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
          {/* <a
            href="#"
            className={`${currentButton === 1 ? "disabled" : ""}`}
            onClick={() =>
              setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
            }
          >
            Prev
          </a> */}

          {arrOfCurrButtons.map((item, index) => {
            // console.log(item, index);
            return (
              <div
                key={index}
                className={classes.pagination_number__container}
                onClick={() => setCurrentButton(item)}
              >
                <a
                  key={item}
                  // className={`${currentButton === item ? "active" : ""}`}
                  className={classes.pagination__number}
                  href=""
                  target="_blank"
                >
                  {item}
                </a>
              </div>
            );
          })}
          {/* 
          <a
            href="#"
            className={`${
              currentButton === numberOfBooks.length ? "disabled" : ""
            }`}
            onClick={() =>
              setCurrentButton((prev) =>
                prev >= numberOfBooks.length ? prev : prev + 1
              )
            }
          >
            Next
          </a> */}
        </div>

        {/* <div style={{ display: "flex" }}>
          {setStars()}
          {setHalfStar()}
          {setEmptyStar()}
        </div> */}
        {/* <div style={{ display: "flex" }}>{allStars()}</div> */}
      </div>
    </div>
  );
};

export default AllBooks;
