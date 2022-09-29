const data = require('../data/zoo_data');

function isManager(id) {
  const a = data.employees.some((employee) => employee.managers.some((ids) => ids === id));
  return a;
}

function getRelatedEmployees(managerId) {
  const falseTrue = isManager(managerId);
  if (falseTrue === true) {
    const staff = [];
    const employees = data.employees.filter((employee) => employee.managers.includes(managerId));
    employees.forEach((person) => staff.push(`${person.firstName} ${person.lastName}`));
    return staff;
  }
  if (falseTrue === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
