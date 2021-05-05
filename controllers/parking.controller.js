const { parkingService } = require("../services");
const { isString } = require("../validators/validator");

const getcar = async (req, res) => {
  const query = req.query.query;
  console.log(query);
  if (!isString(query)) {
    return res.status(500).send({
      err: "car number or slot should be a string",
    });
  }
  const result = await parkingService.getCar(query);
  res.status(200).send({
    message: "success",
    cardata: result,
  });
};

const parkcar = async (req, res) => {
  const data = req.body.carnumber;
  if (!isString(data)) {
    return res.status(500).send({
      err: "car number should be a string",
    });
  }
  const result = await parkingService.parkCar(data);
  res.status(201).send({
    message: result,
  });
};

const unparkcar = async (req, res) => {
  const data = req.body.slot;
  if (isNaN(data)) {
    return res.status(500).send({
      err: "slot should be a number",
    });
  }
  const result = await parkingService.unparkCar(data);
  res.status(200).send({
    message: result,
  });
};

module.exports = {
  getcar,
  parkcar,
  unparkcar,
};
