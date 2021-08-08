require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs-extra");

const router = require("./routes/index");

const PORT = process.argv[2] || process.env.PORT;

fs.ensureDir(path.resolve(__dirname, "static"));
fs.ensureDir(path.resolve(__dirname, "new-levels"));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));

app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
