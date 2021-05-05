function isExisting(array, slot) {
  let slotTaken = false;
  slotTaken = !!array.find((car) => {
    return car.slot === JSON.stringify(slot);
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

function removeCar(array, key) {
  const data = array;
  const removeindex = data
    .map(function (item) {
      return item.slot;
    })
    .indexOf(key);
  data.splice(removeindex, 1);
  return data;
}

module.exports = {
  isExisting,
  isCarExisting,
  genRandomNum,
  checkCarData,
  removeCar,
};
