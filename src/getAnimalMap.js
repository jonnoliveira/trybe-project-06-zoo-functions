const data = require('../data/zoo_data');

function getAnimalsByGeo() {
  return {
    NE: data.species.filter((animals) => animals.location === 'NE').map((animal) => animal.name),
    NW: data.species.filter((animals) => animals.location === 'NW').map((animal) => animal.name),
    SE: data.species.filter((animals) => animals.location === 'SE').map((animal) => animal.name),
    SW: data.species.filter((animals) => animals.location === 'SW').map((animal) => animal.name),
  };
}
function getAnimalsByNameSorted() {
  return ({
    NE: data.species.filter((animals) => animals.location === 'NE').map((animal) => ({
      [animal.name]: animal.residents.map((animals) => animals.name).sort(),
    })),
    NW: data.species.filter((animals) => animals.location === 'NW').map((animal) => ({
      [animal.name]: animal.residents.map((animals) => animals.name).sort(),
    })),
    SE: data.species.filter((animals) => animals.location === 'SE').map((animal) => ({
      [animal.name]: animal.residents.map((animals) => animals.name).sort(),
    })),
    SW: data.species.filter((animals) => animals.location === 'SW').map((animal) => ({
      [animal.name]: animal.residents.map((animals) => animals.name).sort(),
    })),
  });
}

function getAnimalsByNames(object) {
  if (object.sorted === true) {
    return getAnimalsByNameSorted();
  }
  return ({
    NE: data.species.filter((animals) => animals.location === 'NE').map((animal) => ({
      [animal.name]: animal.residents.map((animals) => animals.name),
    })),
    NW: data.species.filter((animals) => animals.location === 'NW').map((animal) => ({
      [animal.name]: animal.residents.map((animals) => animals.name),
    })),
    SE: data.species.filter((animals) => animals.location === 'SE').map((animal) => ({
      [animal.name]: animal.residents.map((animals) => animals.name),
    })),
    SW: data.species.filter((animals) => animals.location === 'SW').map((animal) => ({
      [animal.name]: animal.residents.map((animals) => animals.name),
    })),
  });
}

function getAnimalsBySex(object) {
  return ({
    NE: data.species.filter((animals) => animals.location === 'NE').map((animal) => ({
      [animal.name]: animal.residents.filter((specie) =>
        specie.sex === object.sex).map((wild) => wild.name),
    })),
    NW: data.species.filter((animals) => animals.location === 'NW').map((animal) => ({
      [animal.name]: animal.residents.filter((specie) =>
        specie.sex === object.sex).map((wild) => wild.name),
    })),
    SE: data.species.filter((animals) => animals.location === 'SE').map((animal) => ({
      [animal.name]: animal.residents.filter((specie) =>
        specie.sex === object.sex).map((wild) => wild.name),
    })),
    SW: data.species.filter((animals) => animals.location === 'SW').map((animal) => ({
      [animal.name]: animal.residents.filter((specie) =>
        specie.sex === object.sex).map((wild) => wild.name),
    })),
  });
}

function getAnimalsBySexSorted(object) {
  return ({
    NE: data.species.filter((animals) => animals.location === 'NE').map((animal) => ({
      [animal.name]: animal.residents.filter((specie) =>
        specie.sex === object.sex).map((wild) => wild.name).sort(),
    })),
    NW: data.species.filter((animals) => animals.location === 'NW').map((animal) => ({
      [animal.name]: animal.residents.filter((specie) =>
        specie.sex === object.sex).map((wild) => wild.name).sort(),
    })),
    SE: data.species.filter((animals) => animals.location === 'SE').map((animal) => ({
      [animal.name]: animal.residents.filter((specie) =>
        specie.sex === object.sex).map((wild) => wild.name).sort(),
    })),
    SW: data.species.filter((animals) => animals.location === 'SW').map((animal) => ({
      [animal.name]: animal.residents.filter((specie) =>
        specie.sex === object.sex).map((wild) => wild.name).sort(),
    })),
  });
}

function functionOfFunctions(object) {
  if (object.sorted && !object.sex) return getAnimalsByNames(object);
  if (object.sex) return getAnimalsBySex(object);
  if (object.includeNames) return getAnimalsByNames(object);
}

function getAnimalMap(object) {
  if (!object || !object.includeNames) {
    return getAnimalsByGeo();
  }
  if (object.sex && object.sorted) {
    return getAnimalsBySexSorted(object);
  }
  return functionOfFunctions(object);
}

module.exports = getAnimalMap;
