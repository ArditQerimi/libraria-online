const express = require("express");
const router = express.Router();
const { searchBook } = require("../controllers/searchController");
router.route("/search").get(searchBook);
module.exports = router;
