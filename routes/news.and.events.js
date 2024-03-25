const express = require("express");
const multer = require("multer");
const AddNewsAndEvents = require("../controllers/news.and.events");

const storage = require("../middlewares/news.upload");

const router = express.Router();

// Initialize Multer
const upload = multer({ storage: storage });

router
  .route("/")
  .post(upload.array("news-files"), AddNewsAndEvents.addNewsAndEvents)
  .get(AddNewsAndEvents.getAllNews);

module.exports = router;
