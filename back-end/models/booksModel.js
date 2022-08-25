const mongoose = require("mongoose");

const BooksSchema = mongoose.Schema(
  {
    id: Number,
    title: String,
    image: String,
    rating: Number,
    ratings: Number,
    posted_by: String,
    date: String,
    reviews: String,
    category: String,
    author: String,
    description: String,
    publisher: String,
    lang: String,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", BooksSchema);
