const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const routes = require("./routes/parkinglot");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
