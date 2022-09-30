const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  const object = {};

  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    } else if (element.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  object.child = child;
  object.adult = adult;
  object.senior = senior;
  return object;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitorsNumbersObject = countEntrants(entrants);
  const { child, adult, senior } = visitorsNumbersObject;
  const payment = (child * 20.99) + (adult * 49.99) + (senior * 24.99);
  return payment;
}

console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));

module.exports = { calculateEntry, countEntrants };
