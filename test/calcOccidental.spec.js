/* eslint-disable no-undef */
const { expect } = require('chai');
const { calcOccidental } = require('../src/utils/calcOccidental.js');

describe('calcOccidental()', () => {
  it('should calculate the occidental frame', () => {
    const result = calcOccidental(0x6073);
    expect(result).to.equal(8);
  });
});
