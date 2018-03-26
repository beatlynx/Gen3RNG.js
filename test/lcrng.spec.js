/* eslint-disable no-undef */
const { expect } = require('chai');
const { advancePRNG } = require('../src/utils/lcrng.js');

describe('advancePRNG()', () => {
  it('should advance the PRNG state', () => {
    const result = advancePRNG(0x41C64D6D, 0x6073, 0xAABBCCDD);
    expect(result).to.equal(0xBE83138C);
  });
});
