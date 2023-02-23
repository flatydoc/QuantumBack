const express = require("express");
const cors = require("cors");
let cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(cookieParser());

let feedbackRouter = require("./routes/feedbackRouter");

app.use("/feedback", feedbackRouter);

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

start();
