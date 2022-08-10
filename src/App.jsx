import { useState, useEffect, useLayoutEffect } from "react";
import classes from "./App.module.css";
import Navigation from "./components/Navigation";

import Body from "./components/Body";
import axios from "axios";
function App() {
  const [cards, setCards] = useState([]);
  const [latestBook, setLatestBook] = useState([]);
  // console.log(latestBook);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:8080/");
      setCards(req.data.latestbooks);
      setLatestBook(req.data.recentbooks);
    }
    fetchData();
  }, []);

  // console.log(cards);
  return (
    <div className={classes.app}>
      <Navigation />
      <Body cards={cards} latestBook={latestBook} />
      {/* <h1>{data}</h1> */}
    </div>
  );
}

export default App;
