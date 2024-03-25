const NewsAndEvents = require("../models/news.and.event");
const fs = require("fs");

const addNewsAndEvents = async (req, res) => {
  let path = "";
  try {
    if (req.files) {
      const files = Array.isArray(req.files) ? req.files : [req.files];
      files.forEach((file) => {
        if (Array.isArray(file)) {
          file.forEach((singleFile) => {
            path = path + singleFile.path + ",";
          });
        } else {
          path = path + file.path + ",";
        }
      });
      path = path.substring(0, path.lastIndexOf(","));
    }

    const { title, subtitle, content } = req.body;
    const newsImgUrl = path;

    const news = new NewsAndEvents({
      title,
      subtitle,
      content,
      newsImgUrl,
    });

    await news.save();
    res.status(201).json({ message: "News and events successfully added" });
  } catch (error) {
    console.error("Error adding news and events:", error);
    res.status(500).json({ message: "Error adding news and events" });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await NewsAndEvents.find();
    res.status(200).json(news);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addNewsAndEvents, getAllNews };
