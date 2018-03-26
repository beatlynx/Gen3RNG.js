/* eslint-disable no-undef */
const { expect } = require('chai');
const { advanceLCRNG } = require('../src/utils/lcrng.js');

describe('advanceLCRNG()', () => {
  it('should advance the PRNG state', () => {
    const result = advanceLCRNG(0x41C64D6D, 0x6073, 0xAABBCCDD);
    expect(result).to.equal(0xBE83138C);
  });
});
