const sum = require('./sum');

describe('The function sum()', () => {
  it('Sum 4 and 5 and returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Sum 0 and 0 and returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Throw error when sum 4 and "5"', () => {
    expect(() => sum(4, '5')).toThrowError();
  });

  it('Throw error "parameters must be numbers" when sum 4 and "5"', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
