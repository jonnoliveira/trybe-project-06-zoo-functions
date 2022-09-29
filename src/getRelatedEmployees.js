const data = require('../data/zoo_data');

function isManager(id) {
// TESTA SE ALGUM (SOME) EMPREGADO É GERENCIADO PELA PESSOA DO ID ENCONTRADO (FIND);
  return data.employees.some((employee) => employee.managers.find((ids) => ids === id));
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
