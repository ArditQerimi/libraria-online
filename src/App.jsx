import { useState, useEffect, useLayoutEffect } from "react";
import classes from "./App.module.css";
import Navigation from "./components/Navigation";

import Body from "./components/Body";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GET_BOOKS, POST_BOOKS } from "./redux/types/types";
import { getBooksFetch } from "./redux/slice/books";
function App() {
  const rows = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => dispatch({ type: GET_BOOKS }), []);
  console.log(rows.books);

  // console.log(rows);
  const [edit, setEdit] = useState(false);

  const [book, setBook] = useState([]);
  const [cards, setCards] = useState([]);
  const [latestBooks, setLatestBooks] = useState([]);

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [category, setCategory] = useState();
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [lang, setLang] = useState("");
  const [price, setPrice] = useState("");

  const categories = [
    {
      id: 1,
      category: [
        {
          id: 1,
          title: "Science",
        },
        {
          id: 2,
          title: "Religion",
        },
        {
          id: 3,
          title: "Fiction",
        },
        {
          id: 4,
          title: "Adventure",
        },
        {
          id: 5,
          title: "Fantasy",
        },
      ],
    },
    {
      id: 2,
      category: [
        {
          id: 6,
          title: "Classics",
        },
        {
          id: 7,
          title: "Comic",
        },
        {
          id: 8,
          title: "Horror",
        },
        {
          id: 9,
          title: "Action",
        },
        {
          id: 10,
          title: "Mystery",
        },
      ],
    },
  ];

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePublisher = (e) => {
    setPublisher(e.target.value);
  };

  const handleLang = (e) => {
    setLang(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  // const handleSubmit = () => {

  // };

  const onNewCard = () => {
    const newBookObj = {
      id: Math.random(),
      title: title,
      image: img,
      posted_by: "Ardit Qerimi",
      reviews: 42,
      rating: 4.8,
      ratings: 493,
      date: "13/08/2022",
      category: category,
      publisher: publisher,
      author: author,
      description: description,
      price: price,
      lang: lang,
    };

    console.log(newBookObj);

    setLatestBooks([...latestBooks, newBookObj]);

    // axios
    //   .post("http://localhost:8080/", {
    //     id: Math.random(),
    //     title: title,
    //     image: img,
    //     posted_by: "Ardit Qerimi",
    //     reviews: 42,
    //     rating: 4.8,
    //     ratings: 493,
    //     date: "13/08/2022",
    //     category: category,
    //     publisher: publisher,
    //     author: author,
    //     description: description,
    //     price: price,
    //     lang: lang,
    //   })
    //   .then((res) => console.log(res.data));
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const req = await axios.get("http://localhost:8080/");
  //     setCards(req.data.books);
  //     setLatestBooks(req.data.books);
  //   }
  //   fetchData();
  // }, []);
  // console.log(latestBooks);
  return (
    <div className={classes.app}>
      <Navigation />
      <Body
        cards={cards}
        latestBooks={rows.books}
        setLatestBooks={setLatestBooks}
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
        book={book}
        setBook={setBook}
      />
    </div>
  );
}

export default App;
