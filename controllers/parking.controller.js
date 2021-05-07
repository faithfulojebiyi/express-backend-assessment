const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const { parkingService } = require("../services");
const { isString } = require("../validators/validator");

const getcar = catchAsync(async (req, res) => {
  const query = req.query.query;
  // console.log(query);
  if (!isString(query)) {
    throw new ApiError(500, "car number or slot should be a string");
  }
  const result = await parkingService.getCar(query);
  res.status(200).send({
    message: "success",
    cardata: result,
  });
});

const parkcar = catchAsync(async (req, res) => {
  const data = req.body.carnumber;
  if (!isString(data)) {
    throw new ApiError(500, "car number should be a string");
  }
  const result = await parkingService.parkCar(data);
  res.status(201).send({
    message: result,
  });
});

const unparkcar = catchAsync(async (req, res) => {
  const data = req.body.slot;
  if (isNaN(data)) {
    throw new ApiError(500, "slot should be a number");
  }
  const result = await parkingService.unparkCar(parseInt(data));
  res.status(200).send({
    message: result,
  });
});

module.exports = {
  getcar,
  parkcar,
  unparkcar,
};
