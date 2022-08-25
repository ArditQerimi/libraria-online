const Books = require("../models/booksModel");

exports.searchBook = async (req, res) => {
  try {
    let contains = new RegExp(req.query.title, "i");

    let products = await Books.find({ title: contains });

    console.log(products);

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log("error");
  }
};
