const CustomError = require("../extensions/custom-error");


// весна — spring, лето — summer, осень — autumn (fall), зима — winter

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (Object.keys(date).length !== 0) {
    throw new Error();
  }

  const [SPRING, SUMMER, AUTUMN, WINTER] = ['spring', 'summer', 'autumn', 'winter'];

  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      return WINTER;

    case 2:
    case 3:
    case 4:
      return SPRING;

    case 5:
    case 6:
    case 7:
      return SUMMER;

    case 8:
    case 9:
    case 10:
      return AUTUMN;
  }

};
