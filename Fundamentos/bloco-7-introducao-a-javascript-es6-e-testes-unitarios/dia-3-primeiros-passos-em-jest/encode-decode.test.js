const { encode, decode } = require('./encode-decode');

describe('The function encode()', () => {
  it('encode() is a function', () => {
    expect(typeof (encode)).toBe('function');
  });

  it('Return "1 2 3 4 5" when pass "a e i o u"', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  });

  it('Do not convert letters that are not vowels into numbers', () => {
    const charNumbers = ['1', '2', '3', '4', '5'];
    expect(encode('b c d g h t')).not.toContain(...charNumbers);
  });

  it('Returned string has same length as string passed as parameter', () => {
    const sentence = 'escola';
    expect(encode(sentence)).toHaveLength(sentence.length);
  });
});

describe('The function decode()', () => {
  it('decode() is a function', () => {
    expect(typeof (decode)).toBe('function');
  });

  it('Return "a e i o u" when pass "1 2 3 4 5"', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  });

  it('Do not convert numbers different from 1, 2, 3, 4 e 5 into vowels', () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    expect(decode('6 7 8 9 0')).not.toContain(...vowels);
  });

  it('Returned string has same length as string passed as parameter', () => {
    const sentence = '2sc4l1';
    expect(decode(sentence)).toHaveLength(sentence.length);
  });
});
