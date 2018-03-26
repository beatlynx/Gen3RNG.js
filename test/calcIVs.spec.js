/* eslint-disable no-undef */
const { expect } = require('chai');
const { calcIVs } = require('../src/utils/calcIVs.js');

describe('calcIVs()', () => {
  it('should calculate the IVs', () => {
    const ivs = {
      iv32: 'FFFF',
      hpiv: 31,
      atkiv: 31,
      defiv: 31,
      spaiv: 0,
      spdiv: 0,
      speiv: 0
    };
    const result = calcIVs(0xFFFF, 0);
    expect(result).to.deep.equal(ivs);
  });
});
