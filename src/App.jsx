import { useState, useEffect, useLayoutEffect } from "react";
import classes from "./App.module.css";
import Navigation from "./components/Navigation";

import Body from "./components/Body";
import axios from "axios";
function App() {
  const [cards, setCards] = useState([]);
  const [latestBooks, setLatestBooks] = useState([]);

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [category, setCategory] = useState();

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
    };

    console.log(newBookObj);

    setLatestBooks([...latestBooks, newBookObj]);

    axios
      .post("http://localhost:8080/", {
        id: Math.random(),
        title: title,
        image: img,
        posted_by: "Ardit Qerimi",
        reviews: 42,
        rating: 4.8,
        ratings: 493,
        date: "13/08/2022",
        category: category,
      })
      .then((res) => console.log(res.data));
  };

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8080/");
      setCards(req.data.latestbooks);
      setLatestBooks(req.data.recentbooks);
    }
    fetchData();
  }, []);

  return (
    <div className={classes.app}>
      <Navigation />
      <Body
        cards={cards}
        latestBooks={latestBooks}
        setLatestBooks={setLatestBooks}
        onNewCard={onNewCard}
        title={title}
        handleTitle={handleTitle}
        img={img}
        handleImg={handleImg}
        author={author}
        handleAuthor={handleAuthor}
        category={category}
        setCategory={setCategory}
        handleCategory={handleCategory}
        categories={categories}
      />
    </div>
  );
}

export default App;
