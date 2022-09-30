const data = require('../data/zoo_data');

const weekdays = Object.keys(data.hours);
const zooAnimals = data.species.map(({ name: animalName }) => animalName);

function weekSchedule() { // VAI SER PASSADA CASO A FUNÇÃO SEJA CHAMADA SEM PARÂMETRO OU COM QLQR != PARÂMETRO.
  const scheduleOfTheWeek = {};
  weekdays.forEach((days) => {
    if (days === 'Monday') {
      scheduleOfTheWeek[days] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      scheduleOfTheWeek[days] = {
        officeHour: `Open from ${data.hours[days].open}am until ${data.hours[days].close}pm`,
        exhibition: data.species.filter((animal) =>
          animal.availability.includes(days)).map(({ name: animalName }) => animalName),
      };
    }
  });
  return scheduleOfTheWeek;
}

function animalDay(animalName) { // VAI SER PASSADA CASO A FUNÇÃO SEJA CHAMADA COM PARÂMETRO ANIMAL.
  const element = data.species.find((animal) => animal.name === animalName);
  return element.availability;
}

function daySchedule(days) { // VAI SER PASSADA CASO A FUNÇÃO SEJA CHAMADA COM PARÂMETRO DIA
  const scheduleOfTheDay = {};
  if (days === 'Monday') {
    scheduleOfTheDay[days] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    scheduleOfTheDay[days] = {
      officeHour: `Open from ${data.hours[days].open}am until ${data.hours[days].close}pm`,
      exhibition: data.species.filter((animal) =>
        animal.availability.includes(days)).map(({ name: animalName }) => animalName),
    };
  }
  return scheduleOfTheDay;
}

function animalAndDaySchedule(scheduleTarget) {
  if (zooAnimals.includes(scheduleTarget)) {
    return animalDay(scheduleTarget);
  }
  if (weekdays.includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return weekSchedule();
  }
  if (!zooAnimals.includes(scheduleTarget) && !weekdays.includes(scheduleTarget)) {
    return weekSchedule();
  }
  return animalAndDaySchedule(scheduleTarget);
}
console.log(getSchedule('banana'));

module.exports = getSchedule;
