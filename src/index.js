const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 5000;

//HTTP logger
app.use(morgan("combined"));

//HTTP template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));

console.log("path", __dirname);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", function (req, res) {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
