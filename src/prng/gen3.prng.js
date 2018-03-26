const _ = require('lodash');
const { advanceLCRNG } = require('../utils/lcrng.js');

/**
 * Advances a Gen 3 PRNG state
 * @param {number} seed The PRNG state
 * @return {number} The next PRNG state
 */
function advanceState(seed) {
  return advanceLCRNG(0x41C64E6D, 0x6073, seed);
}

/**
 * Advances a Gen 3 LCRNG multiple times
 * @param {number} seed An LCRNG state
 * @param {number} times The number of times to advance the PRNG state
 * @return {number} The new PRNG state
 */
function advanceMultipleStates(seed, times) {
  const range = _.range(0, times);

  return _.reduce(range, (result) => {
    return advanceState(result);
  }, seed);
}

module.exports = { advanceState, advanceMultipleStates };
