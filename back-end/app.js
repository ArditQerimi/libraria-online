const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const morgan = require("morgan");
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

const url = process.env.MONGO_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

// routes

const latestBooksRouter = require("./routes/latestBooksRoute");
app.use("/", latestBooksRouter);

const findBookByIdRouter = require("./routes/latestBooksRoute");
app.use("/", findBookByIdRouter);

const latestBookPostRouter = require("./routes/latestBooksRoute");
app.use("/", latestBookPostRouter);
const server = app.listen(port, () =>
  console.log(`server is running on port ${port}`)
);
