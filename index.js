const express = require("express");
const dotenv = require("dotenv");
const ApiError = require("./utils/ApiError");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

const routes = require("./routes/parkinglot");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.all("*", (req, res, next) => {
  new ApiError(400, `Requested URL ${req.path} not found`);
});

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
