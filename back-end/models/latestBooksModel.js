const mongoose = require("mongoose");

const LatestBooksSchema = mongoose.Schema(
  {
    // id: Number,
    cards: [
      {
        id: Number,
        title: String,
        image: String,
      },
    ],
  }
  // { timestamps: true }
);

module.exports = mongoose.model("LatestBooks", LatestBooksSchema);
