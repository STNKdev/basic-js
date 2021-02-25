const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const result = members.reduce((prevValue, member) => {
    if (typeof member === 'string') {
      return prevValue += member.trim()[0].toUpperCase();
    }
    return prevValue;
  }, '').split('');

  return result.sort().join('');
};
