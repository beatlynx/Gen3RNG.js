/* eslint-disable no-undef */
const { expect } = require('chai');
const { calcPID } = require('../src/utils/calcPID.js');

describe('calcPID()', () => {
  it('should calculate the PID', () => {
    const result = calcPID(0xCCDD, 0xAABB);
    expect(result).to.equal(0xAABBCCDD);
  });
});
