const express = require("express");
const { parkingController } = require("../controllers");

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send("Welcome Nasdaily");
});

router.get("/getcar", parkingController.getcar);

router.post("/parkcar", parkingController.parkcar);

router.post("/unparkcar", parkingController.unparkcar);

module.exports = router;
