const {
  add32bit: add,
  multiply32bit: multiply
} = require('./math32.js');

/**
 * Advance a linear congruent PRNG
 * @param {number} multiplier The LCRNG multiplier
 * @param {number} additive The LCRNG additive
 * @param {number} state The current state of the PRNG
 * @return {number} The next state of the PRNG
 */
function advanceLCRNG(multiplier, additive, state) {
  return add(multiply(state, multiplier), additive);
}

module.exports = { advanceLCRNG };
