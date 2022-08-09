// import "./App.css";
import { useState, useEffect } from "react";
import classes from "./App.module.css";

// functions

import { getTest } from "./functions/test";
import Navigation from "./components/Navigation";

import Body from "./components/Body";

function App() {
  const [data, setData] = useState("Hello world!");

  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.app}>
      <Navigation />
      <Body />
      {/* <h1>{data}</h1> */}
    </div>
  );
}

export default App;
