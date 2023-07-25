const express = require("express");
const artist = require("../controllers/artist.controller");
const router = express.Router();

router.get("/artist-search", artist.search);
router.get("/artist-search/:id", artist.results);

module.exports = router;