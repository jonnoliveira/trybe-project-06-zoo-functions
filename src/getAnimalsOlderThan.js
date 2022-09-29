const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalRequired = data.species.find((animals) => animals.name === animal);
  return animalRequired.residents.every((elements) => elements.age >= age);
}

module.exports = getAnimalsOlderThan;
