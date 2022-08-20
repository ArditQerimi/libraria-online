const mongoose = require("mongoose");

const RecentBooksSchema = mongoose.Schema(
  {
    // id: Number,
    // cards: {
    id: Number,
    title: String,
    image: String,
    rating: Number,
    ratings: Number,
    posted_by: String,
    date: String,
    reviews: String,
    category: String,
  },
  // },
  { timestamps: true }
);

module.exports = mongoose.model("RecentBooks", RecentBooksSchema);
