/**
 * Function to check if a slot has been taken.
 * @param {Array} array - an array of objects of the slots already taken
 * @param {string} slot - slot to be checked agains the slot array
 * @return {Boolean} Returns true if Existing and false if not .
 */

function isExisting(array, slot) {
  let slotTaken = false;
  slotTaken = !!array.find((car) => {
    return car.slot === JSON.stringify(slot);
  });
  return slotTaken;
}

/**
 * Function to check if a slot has been taken.
 * @param {Array} array - an array of objects of the slots already taken
 * @param {String} carnumber - carnumber to be checked agains the slot array
 * @return {Boolean} Returns true if Existing and false if not .
 */
function isCarExisting(array, carnumber) {
  let slotTaken = false;
  slotTaken = !!array.find((car) => {
    return car.carNumber === carnumber;
  });
  return slotTaken;
}

/**
 * Function to generate a random number between an minimum and maximum number.
 * @param {number} min - minimum value always 1
 * @param {number} max - lots size of the park
 * @return {number} Returns a random number .
 */
function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Function to find a car with the slot number or carnumber
 * @param {Array} array - an array of slots taken
 * @param {String} query - carnumber or slot number
 * @return {Array} Returns an array with match  .
 */
function checkCarData(array, query) {
  return array.filter((d) => d.slot === query || d.carNumber === query);
}

/**
 * Function to remove a car from a slot
 * @param {Array} array - an array of slots taken
 * @param {String} key - slot number
 * @return {Array} Returns an array of updated slot data .
 */
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
