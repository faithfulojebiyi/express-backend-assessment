const path = require("path");
const fs = require("fs");
const {
  isExisting,
  isCarExisting,
  genRandomNum,
  checkCarData,
  removeCar,
} = require("../utils/helpers");

const lotSize = parseInt(process.env.LOTSIZE);

const data = fs.readFileSync(
  path.resolve(path.resolve(__dirname, "../cardata.json"))
);

console.log(lotSize);
const minVal = 1;
let a = 0;
let exists = false;

const carData = JSON.parse(JSON.stringify(JSON.parse(data), null, 2));

const parkCar = async (carnumber) => {
  console.log(carData.length);
  if (isCarExisting(carData, carnumber)) {
    return "Car is already parked";
  }
  if (carData.length === 0) {
    a = genRandomNum(minVal, lotSize);
    const car = {
      slot: a,
      carNumber: carnumber,
    };
    carData.push(car);
    fs.writeFileSync(
      path.resolve(path.resolve(__dirname, "../cardata.json")),
      JSON.stringify(carData, null, 2)
    );
    console.log("is empty");
    return cardata;
  } else if (carData.length === lotSize) {
    return "Parking lot full";
  } else {
    do {
      console.log(exists);
      a = genRandomNum(minVal, lotSize);
      exists = isExisting(carData, a);
      console.log(a, exists);
    } while (exists == true);
    const cardata = {
      slot: a,
      carNumber: carnumber,
    };
    carData.push(cardata);
    fs.writeFileSync(
      path.resolve(path.resolve(__dirname, "../cardata.json")),
      JSON.stringify(carData, null, 2)
    );
    return cardata;
  }
};

const unparkCar = async (slotnumber) => {
  if (!isExisting(carData, slotnumber)) {
    return "This slot is already free";
  }
  const cardata = removeCar(carData, slotnumber);
  fs.writeFileSync(
    path.resolve(path.resolve(__dirname, "../cardata.json")),
    JSON.stringify(cardata, null, 2)
  );
  return `Car in slot ${slotnumber} is unparked. Slot ${slotnumber} is now free`;
};

const getCar = async (query) => {
  return checkCarData(carData, query);
};

module.exports = {
  parkCar,
  unparkCar,
  getCar,
};
