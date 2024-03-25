const express = require("express");
const NewsAndEvents = require("./news.and.events");
const router = express.Router();

router.use("/api/news-and-events", NewsAndEvents);

module.exports = router;
