const express = require("express");
const router = express.Router();
const {
  latestBooks,
  recentBook,
  latestBookPost,
} = require("../controllers/latestBooksController");

router.route("/").get(latestBooks);
router.route("/").post(recentBook);
router.route("/").post(latestBookPost);

module.exports = router;
