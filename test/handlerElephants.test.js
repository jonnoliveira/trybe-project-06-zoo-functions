const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste 1 - testa se "handlerElephants" é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Teste 2 - testa se quando param === undefined, retorna undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Teste 3 - testa se quando param !== "string", retorna uma frase de alerta', () => {
    const teste = 1234;
    expect(handlerElephants(423)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(teste)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Teste 4 - testa se quando passado um parâmetro é retornado as chaves corretas do animal Elefante', () => {
    expect(handlerElephants('name')).toEqual('elephants');
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual([
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ]);
  });
  it('Teste 5 - testa se a função retorna a contagem de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Teste 6 - testa se a função retorna os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Teste 7 - testa se a função retorna a média das idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Teste 8 - testa se a função retorna o local onde se encontram os elefantes', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Teste 9 - testa se a função retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Teste 10 - testa se a função retorna a disponibilidade dos elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Teste 11 - testa se a função retorna null caso seja passado qualquer parâmetro diferente', () => {
    expect(handlerElephants('academy')).toEqual(null);
  });
});
