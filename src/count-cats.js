const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {

  if (typeof cats === 'undefined' || cats.length === 0) {
    return 0;
  }

  return cats.reduce((count, item) => {
    item.forEach((cat) => {
      if (cat === '^^') {
        count += 1;
      }
    });
    return count;
  }, 0);
};
