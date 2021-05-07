function calculateNextResetTime(windowMs) {
  const date = new Date();
  date.setMilliseconds(date.getMilliseconds() + windowMs);
  return date;
}

function MemoryStore(windowMs) {
  let hits = {};
  let resetTime = calculateNextResetTime(windowMs);
  console.log(resetTime);

  this.incr = function (key, cb) {
    if (hits[key]) {
      hits[key]++;
    } else {
      hits[key] = 1;
    }

    cb(null, hits[key], resetTime);
  };

  this.decrement = function (key) {
    if (hits[key]) {
      hits[key]--;
    }
  };

  // export an API to allow hits all IPs to be reset
  this.resetAll = function () {
    hits = {};
    resetTime = calculateNextResetTime(windowMs);
  };

  // export an API to allow hits from one IP to be reset
  this.resetKey = function (key) {
    delete hits[key];
  };

  // simply reset ALL hits every windowMs
  const interval = setInterval(this.resetAll, windowMs);
  if (interval.unref) {
    interval.unref();
  }
}

module.exports = MemoryStore;
