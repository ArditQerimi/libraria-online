const Books = require("../models/booksModel");

exports.getBooks = async (req, res) => {
  try {
    const books = await Books.find();

    
    res.status(200).json({
      success: true,
      books,
    });
  } catch (error) {
    console.log("error");
  }
};

exports.postBooks = async (req, res) => {
  try {
    let newBook = new Books(req.body);
    await newBook.save();
  } catch (error) {
    console.log("error");
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletebook = await Books.deleteOne({ _id: id });
    res.status(201).json(deletebook);
  } catch (error) {
    res.status(422).json(error);
  }
};

exports.editBook = async (req, res) => {
  try {
    const { id } = req.params;

    const editbook = await Books.findOneAndUpdate(
      {
        _id: id,
      },
      {
        title: req.body.title,
        image: req.body.image,
      }
    );
    console.log(editbook);
    res.status(201).json(editbook);
  } catch (error) {
    res.status(422).json(error);
  }
};
// RecentBooks.insertMany(allrecentbooks)
//   .then(function () {
//     console.log("Data inserted"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });

// LatestBooks.insertMany(cards)
//   .then(function () {
//     console.log("Data inserted"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });
