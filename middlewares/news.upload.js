const multer = require("multer");
const path = require("path");

// const location = path.join(__dirname, "uploads");
// console.log(location);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/news-and-events/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Use the original filename
  },
});

module.exports = storage;
