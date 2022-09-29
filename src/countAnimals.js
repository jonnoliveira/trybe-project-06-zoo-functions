const data = require('../data/zoo_data');

function onlySpecie(animal) {
  const { specie } = animal;
  const animalInfo = data.species.find((animals) => animals.name === specie);
  return animalInfo.residents.length;
}

function specieAndSex(animal) {
  const { specie, sex } = animal;
  const animalInfo = data.species.find((animals) => animals.name === specie);
  return animalInfo.residents.filter((element) => element.sex === sex).length;
}

function allAnimals() {
  const animalsZoo = data.species;
  const zooAnimalsCount = {};
  animalsZoo.forEach((animal) => {
    (zooAnimalsCount[animal.name] = animal.residents.length);
  });
  return zooAnimalsCount;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return allAnimals();
  }
  if (Object.keys(animal).length === 1) {
    return onlySpecie(animal);
  }
  if (Object.keys(animal).length === 2) {
    return specieAndSex(animal);
  }
}

console.log(countAnimals());

module.exports = countAnimals;
