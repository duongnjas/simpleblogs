const postRouter = require("./post");
const detailRouter = require("./detail");

function route(app) {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  app.use("/", postRouter);

  app.use("/detail", detailRouter);
}

module.exports = route;
