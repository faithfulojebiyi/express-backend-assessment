const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send("Welcome Nasdaily");
});

router.get("/getcar", async (req, res) => {
  const query = req.query.query;
  res.status(200).send({
    message: "Park your car ",
    data: query,
  });
});

router.post("/parkcar", async (req, res) => {
  const data = req.body;
  res.status(201).send({
    message: "car parked",
    slot: "slot",
    data: data,
  });
});

router.post("/unparkcar", async (req, res) => {
  const data = req.body;
  res.status(200).send({
    message: "car unparked",
    data: data,
  });
});

module.exports = router;
