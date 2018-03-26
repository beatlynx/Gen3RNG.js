/* eslint-disable no-undef */
const { expect } = require('chai');
const { add32bit, multiply32bit } = require('../src/utils/math32.js');

describe('add32bit()', () => {
  it('should safely add two 32 bit numbers', () => {
    const result = add32bit(0xE91DA7F7, 0x6073);
    expect(result).to.equal(0xE91E086A);
  });
});

describe('multiply32bit()', () => {
  it('should safely multiply two 32 bit numbers', () => {
    const result = multiply32bit(0x6073, 0x41C64D6D);
    expect(result).to.equal(0xE91DA7F7);
  });
});
