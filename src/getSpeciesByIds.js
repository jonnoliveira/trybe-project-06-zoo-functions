const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const array = [];
  ids.forEach((id) => {
    array.push(data.species.find((animal) => id === animal.id));
  });
  return array;
}

getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d', '0938aa23-f153-4937-9f88-4858b24d6bce');

module.exports = getSpeciesByIds;
