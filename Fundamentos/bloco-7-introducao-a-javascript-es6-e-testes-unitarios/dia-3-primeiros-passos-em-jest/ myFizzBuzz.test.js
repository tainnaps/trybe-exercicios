const myFizzBuzz = require('./ myFizzBuzz');

describe('The function myFizzBuzz()', () => {
  it('Return fizzbuzz when passes 15 as parameter', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Return fizz when passes 9 as parameter', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Return buzz when passes 10 as parameter', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Return 11 when passes 11 as parameter', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  it('Return false when passes "15" as parameter', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  });
});
