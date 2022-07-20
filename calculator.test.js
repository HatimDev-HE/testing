const calculator = require('./calculator');

describe('add, subtract, divide, and multiply from the passed numbers', () => {
  describe('Add 2 numbers that are passed in', () => {
    test('5 + 5 = 10', () => {
      expect(calculator.add(5, 5)).toBe(10);
    });

    test(' 25 + 37 = 62', () => {
      expect(calculator.add(25, 37)).toEqual(62);
    });

    test('1050 + 2698 = 3748', () => {
      expect(calculator.add(1050, 2698)).toEqual(3748);
    });
  });

  describe('subtract the numbers passed', () => {
    test('7 - 5 = 2', () => {
      expect(calculator.subtract(7, 5)).toBe(2)
    });

    test('190 - 130 = 60', () => {
      expect(calculator.subtract(190, 130)).toBe(60)
    });

    test('5000 and 3000 = 2000', () => {
      expect(calculator.subtract(5000, 3000)).toBe(2000)
    });
  });

  describe('divide the two numbers passed', () => {
    test('8 / 4 = 2', () => {
      expect(calculator.divide(8, 4)).toBe(2)
    });

    test('120 / 2 = 60', () => {
      expect(calculator.divide(120, 2)).toBe(60)
    });

    test('8000 / 4 = 2000', () => {
      expect(calculator.divide(8000, 4)).toBe(2000)
    });
  });

  describe('multiply the two numbers passed', () => {
    test('8 * 4 = 20', () => {
      expect(calculator.multiply(2, 10)).toBe(20)
    });

    test('120 * 2 = 390', () => {
      expect(calculator.multiply(130, 3)).toBe(390)
    });

    test('2000 * 5 = 10000', () => {
      expect(calculator.multiply(2000, 5)).toBe(10000)
    });
  });
})

