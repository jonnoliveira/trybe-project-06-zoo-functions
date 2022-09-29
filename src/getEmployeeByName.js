const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let employers = {};
  if (employeeName !== undefined) {
    employers = data.employees.find((element) => element.firstName === employeeName
      || element.lastName === employeeName);
  }
  return employers;
}

module.exports = getEmployeeByName;
