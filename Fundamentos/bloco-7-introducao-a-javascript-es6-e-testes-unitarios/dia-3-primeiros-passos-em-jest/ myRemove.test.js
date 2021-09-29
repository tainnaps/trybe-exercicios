const myRemove = require('./ myRemove');

describe('The function myRemove()', () => {
  it('Return [1, 2, 4] when pass [1, 2, 3, 4] and 3 as parameters', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Do not return [1, 2, 4] when pass [1, 2, 3, 4] and 3 as parameters', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Return [1, 2, 3, 4] when pass [1, 2, 3, 4] and 5 as parameters', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
