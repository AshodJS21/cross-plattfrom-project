const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
require("dotenv").config()



const cert = fs.readFileSync(path.join(__dirname, "cert", "localhost+1.pem"));
const key = fs.readFileSync(
  path.join(__dirname, "cert", "localhost+1-key.pem")
);

const app = express();

app.use(express.static(path.join(__dirname, "..", "/build")));

app.get("*", (req, res) => {
  res.sendFile("./index.html", { root: path.join(__dirname, "..", "/build") });
});

const PORT = 5500 || process.env.PORT;
https.createServer({ key, cert }, app).listen(PORT, () => {
  console.log("Enter https://localhost:" + PORT + " into your browser");
});
