const path = require("path");
const fs = require("fs");

const lotSize = parseInt(process.env.LOTSIZE);

const data = fs.readFileSync(
  path.resolve(path.resolve(__dirname, "../cardata.json"))
);

console.log(lotSize);
const minVal = 1;
let a = 0;
let exists = false;

const carData = JSON.parse(JSON.stringify(JSON.parse(data), null, 2));

// console.log(carData);
// console.log(carData.length === lotSize);
// fs.writeFileSync(
//   path.resolve(path.resolve(__dirname, "../cardata.json")),
//   JSON.stringify(farmers, null, 2)
// );

function isExisting(array, slot) {
  let slotTaken = false;
  slotTaken = !!array.find((car) => {
    return car.slot === slot;
  });
  return slotTaken;
}

function isCarExisting(array, carnumber) {
  let slotTaken = false;
  slotTaken = !!array.find((car) => {
    return car.carNumber === carnumber;
  });
  return slotTaken;
}

function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCarData(array, query) {
  return array.filter((d) => d.slot === query || d.carNumber === query);
}

// function removeCar(array, key, value) {
//   const index = array.findIndex((obj) => obj[key] === value);
//   return index >= 0
//     ? [...array.slice(0, index), ...array.slice(index + 1)]
//     : array;
// }

function removeCar(array, value) {
  const data = array;
  const removeindex = data
    .map(function (item) {
      return item.slot;
    })
    .indexOf(value);
  data.splice(removeindex, 1);
  return data;
}

const parkCar = async (carnumber) => {
  console.log(carData.length);
  if (isCarExisting(carData, carnumber)) {
    return "Car is already parked";
  }
  if (carData.length === 0) {
    a = genRandomNum(minVal, lotSize);
    const cardata = [];
    const car = {
      slot: a,
      carNumber: carnumber,
    };
    cardata.push(car);
    fs.writeFileSync(
      path.resolve(path.resolve(__dirname, "../cardata.json")),
      JSON.stringify(cardata, null, 2)
    );
    console.log("is empty");
    return cardata;
  } else if (carData.length === lotSize) {
    return "Parking lot full";
  } else {
    do {
      console.log(exists);
      a = genRandomNum(minVal, lotSize);
      exists = !!carData.find((car) => {
        return car.slot === a;
      });
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
// let a = 0;
// let exists = false;
// const users = [
//   {
//     name: 1,
//   },
//   {
//     name: 2,
//   },
// ];

// function genRandomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// if (users.length === 0) {
//   a = genRandomNum(1, 3);
//   console.log("is empty");
// } else {
//   do {
//     console.log(exists);
//     a = genRandomNum(1, 3);
//     exists = !!users.find((user) => {
//       return user.name === a;
//     });
//     console.log(a, exists);
//   } while (exists == true);
// }

// console.log("new", a);
