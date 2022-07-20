const capitalize = require('./case');


describe('return capitalized first letter', () => {
  test('Hatim from hatim', () => {
    expect(capitalize('hatim')).toBe('Hatim');
  });

  test('Hello from hello', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('Pop from pop', () => {
    expect(capitalize('pop')).toBe('Pop');
  });
})