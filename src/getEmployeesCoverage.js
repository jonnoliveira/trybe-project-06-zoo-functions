const data = require('../data/zoo_data');

function findEmployeeByName(object) {
  const foundEmployee = data.employees.find((employee) => employee.firstName === object.name
    || employee.lastName === object.name);
  return {
    id: foundEmployee.id,
    fullName: `${foundEmployee.firstName} ${foundEmployee.lastName}`,
    species: foundEmployee.responsibleFor.map((ids) => data.species.find((specie) =>
      specie.id === ids).name),
    locations: foundEmployee.responsibleFor.map((ids) => data.species.find((specie) =>
      specie.id === ids).location),
  };
}

function findEmployeeById(object) {
  const foundEmployee = data.employees.find((employee) => employee.id === object.id);
  return {
    id: object.id,
    fullName: `${foundEmployee.firstName} ${foundEmployee.lastName}`,
    species: foundEmployee.responsibleFor.map((ids) => data.species.find((specie) =>
      specie.id === ids).name),
    locations: foundEmployee.responsibleFor.map((ids) => data.species.find((specie) =>
      specie.id === ids).location),
  };
}

function employeeWithoutParameter() {
  return data.employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((id) => data.species.find((specie) =>
      specie.id === id).name),
    locations: employee.responsibleFor.map((id) => data.species.find((specie) =>
      specie.id === id).location),
  }));
}

function errorMsg(object) {
  const verifyId = data.employees.some((employee) => employee.id === object.id);
  if (verifyId === false) {
    throw new Error('Informações inválidas');
  }
}

function getEmployeesCoverage(parameter) {
  if (parameter === undefined) {
    return employeeWithoutParameter();
  }
  if (data.employees.some((employee) => employee.firstName === parameter.name)
    || data.employees.some((employee) => employee.lastName === parameter.name)) {
    return findEmployeeByName(parameter);
  }
  if (data.employees.some((employee) => employee.id === parameter.id)) {
    return findEmployeeById(parameter);
  }
  return errorMsg(parameter);
}

module.exports = getEmployeesCoverage;
