const { expect } = require('chai');

describe('checkNumber', () => {
  describe('When the function is called', () => {
    it('recives a number as parameter', () => {
    });

    it('returns a string', () => {
      const result = checkNumber(1);
      expect(result).to.be.a('string');
    });
  });

  describe('When the function recieves a number', () => {
    describe('above 0', () => {
      it('returns "positive"', () => {
        const result = checkNumber(5);
        expect(result).to.be.equal('positive');
      });
    });

    describe('below 0', () => {
      it('returns "negative"', () => {
        const result = checkNumber(-3);
        expect(result).to.be.equal('negative');
      });
    });

    describe('equals 0', () => {
      it('returns "neutral"', () => {
        const result = checkNumber(0);
        expect(result).to.be.equal('neutral');
      });
    });
  });
});
