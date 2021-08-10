const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routers");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded()); // de su dung req.body
app.use(express.json());
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
// Routers innit (khoi tao tuyen duong)
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
