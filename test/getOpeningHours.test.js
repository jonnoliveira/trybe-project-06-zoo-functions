const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste 1 - testa se "getOpeningHours" é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Teste 2 - testa se dado dia e horário, retorna se o zoo está aberto ou fechado', () => {
    const zooClosed = 'The zoo is closed';
    const zooOpen = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '00:00-PM')).toBe(zooOpen);
    expect(getOpeningHours('Sunday', '07:00-PM')).toBe(zooOpen);
    expect(getOpeningHours('Friday', '03:00-PM')).toBe(zooOpen);
    expect(getOpeningHours('Monday', '11:00-PM')).toBe(zooClosed);
    expect(getOpeningHours('Saturday', '04:00-AM')).toBe(zooClosed);
    expect(getOpeningHours('Wednesday', '07:00-AM')).toBe(zooClosed);
  });
  it('Teste 3 - testa se chamar a função sem parâmetro ela reotorna um objeto com dias e horarios', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 }
    });
  });
  it('Teste 4 - testa se dado um dia inválido a função retorna um erro', () => {
    const dayError = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Fri', '09:00-AM')).toThrow(new Error(dayError));
    expect(() => getOpeningHours('Thrusday')).toThrow(new Error(dayError));
    expect(() => getOpeningHours('17:42-PM')).toThrow(new Error(dayError));
    expect(() => getOpeningHours('07:23PM', 'Saturdday')).toThrow(new Error(dayError));
    expect(() => getOpeningHours('Tuessday', '07:23PM')).toThrow(new Error(dayError));
  });
  it('Teste 5 - testa se dado uma abreviação para hora errada (AM/PM) a função retorna um erro', () => {
    const abbreviationError = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '08:55-xM')).toThrow(new Error(abbreviationError));
    expect(() => getOpeningHours('Sunday', '12:11-A')).toThrow(new Error(abbreviationError));
    expect(() => getOpeningHours('Wednesday', '03:33-M')).toThrow(new Error(abbreviationError));
    expect(() => getOpeningHours('Tuesday', '03:44-P')).toThrow(new Error(abbreviationError));
    expect(() => getOpeningHours('Monday', '10:09-oM')).toThrow(new Error(abbreviationError));
    expect(() => getOpeningHours('Thursday', '09:17-1M')).toThrow(new Error(abbreviationError));
  });
  it('Teste 6 - testa se caso haja algum caracter diferente no horario a função retorna um erro', () => {
    const caracterError = 'The hour should represent a number';
    expect(() => getOpeningHours('Friday', '0[8:55-AM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Sunday', '1~2:11-AM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Wednesday', '0^3:33-PM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Tuesday', '0`3:44-PM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Monday', '-10:09-AM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Thursday', ';09:17-PM')).toThrow(new Error(caracterError));
  });
  it('Teste 7 - testa se caso haja algum caracter diferente no horario a função retorna um erro', () => {
    const caracterError = 'The minutes should represent a number';
    expect(() => getOpeningHours('Friday', '08:5[5-AM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Sunday', '12:1~1-AM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Wednesday', '03:3^3-PM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Tuesday', '03:4`4-PM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Monday', '10:-09-AM')).toThrow(new Error(caracterError));
    expect(() => getOpeningHours('Thursday', '09:17;-PM')).toThrow(new Error(caracterError));
  });
  it('Teste 8 - testa se dado uma hora inválido a função retorna um erro', () => {
    const hourError = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Friday', '23:00-PM')).toThrow(new Error(hourError));
    expect(() => getOpeningHours('Sunday', '13:00-AM')).toThrow(new Error(hourError));
    expect(() => getOpeningHours('Wednesday', '21:00-PM')).toThrow(new Error(hourError));
    expect(() => getOpeningHours('Tuesday', '17:00-AM')).toThrow(new Error(hourError));
    expect(() => getOpeningHours('Monday', '19:00-PM')).toThrow(new Error(hourError));
    expect(() => getOpeningHours('Thursday', '199:00-AM')).toThrow(new Error(hourError));
  });
  it('Teste 9 - testa se dado um minuto inválido a função retorna um erro', () => {
    const minError = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Friday', '08:555-PM')).toThrow(new Error(minError));
    expect(() => getOpeningHours('Sunday', '12:111-AM')).toThrow(new Error(minError));
    expect(() => getOpeningHours('Wednesday', '03:333-AM')).toThrow(new Error(minError));
    expect(() => getOpeningHours('Tuesday', '03:444-AM')).toThrow(new Error(minError));
    expect(() => getOpeningHours('Monday', '10:99-AM')).toThrow(new Error(minError));
    expect(() => getOpeningHours('Thursday', '09:777-AM')).toThrow(new Error(minError));
  });
});
