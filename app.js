const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config({ path: "./config.env" });
app.use(cors());

app.use(routes);

const port = process.env.PORT || 4000;

if (process.env.DATABASE && process.env.DATABASE_PASSWORD) {
  const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
  );
  // Now you can use DB safely
  mongoose.set("strictQuery", false);

  mongoose.connect(DB).then((con) => {
    console.log("DB connection succesful");
  });
} else {
  console.error(
    "DATABASE or DATABASE_PASSWORD environment variable is not defined"
  );
  // Handle the situation where environment variables are not defined
}

app.listen(port, () => console.log(`server running on ${port}`));
