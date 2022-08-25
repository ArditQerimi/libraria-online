const express = require("express");
const router = express.Router();

const {
  getBooks,
  postBooks,
  deleteBook,
  editBook,
} = require("../controllers/booksController");
router.route("/").get(getBooks);
router.route("/").post(postBooks);
router.route("/:id").delete(deleteBook);
router.route("/:id").put(editBook);

module.exports = router;
