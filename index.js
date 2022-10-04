const express = require("express");
const path = require("path");
const route = require("./routes/index");
const hbs = require("hbs");

const app = express();
const PORT = 5000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerHelper("if_eq", function (a, b, opts) {
  if (a == b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

route(app);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
