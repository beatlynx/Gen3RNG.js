/* eslint-disable no-undef */
const { expect } = require('chai');
const { calcGender } = require('../src/utils/calcGender.js');

describe('calcGender()', () => {
  it('should calculate the gender', () => {
    const genders = {
      female125: 'M',
      female25: 'M',
      female50: 'F',
      female75: 'F'
    };
    const result = calcGender(0x13F);
    expect(result).to.deep.equal(genders);
  });
});
