const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity === 'undefined'
      || typeof sampleActivity !== 'string'
      || !/\d/.test(sampleActivity)) {
    return false;
  }

  sampleActivity = Number(sampleActivity);

  if (Number.isNaN(sampleActivity)
      || sampleActivity <= 0
      || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  const k = Math.log(2) / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);

};
