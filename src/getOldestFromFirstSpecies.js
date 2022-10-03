const data = require('../data/zoo_data');

function findEmployee(id) {
  return data.employees.find((employee) => employee.id === id);
}

function findFirstAnimal(id) {
  return findEmployee(id).responsibleFor[0];
}

function speciesAnimalsInTheZoo(id) {
  return data.species.find((animal) => animal.id === findFirstAnimal(id)).residents;
}

function getOldestFromFirstSpecies(id) {
  const animals = speciesAnimalsInTheZoo(id);
  const oldestAnimalAge = animals.reduce((acc, curr) => {
    if (acc > curr.age) {
      return acc;
    }
    return curr.age;
  }, 0);
  const oldestAnimal = animals.filter((animal) => animal.age === oldestAnimalAge)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
