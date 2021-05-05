const express = require("express");
const { parkingService } = require("../services");

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send("Welcome Nasdaily");
});

router.get("/getcar", async (req, res) => {
  const query = JSON.parse(req.query.query);
  const result = await parkingService.getCar(query);
  res.status(200).send({
    message: "Park your car ",
    result,
  });
});

router.post("/parkcar", async (req, res) => {
  const data = req.body.carnumber;
  const result = await parkingService.parkCar(data);
  res.status(201).send({
    message: result,
  });
});

router.post("/unparkcar", async (req, res) => {
  const data = req.body.slot;
  const result = await parkingService.unparkCar(data);
  res.status(200).send({
    message: result,
  });
});

module.exports = router;
