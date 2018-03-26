const { advanceState, advanceMultipleStates } = require('../prng/gen3.prng.js');
const { calcPID } = require('./calcPID.js');

/**
 * Calculates an occidental frame
 * @param {number} seed A PRNG seed
 * @return {number} The occidental frame
 */
function calcOccidental(seed) {
  let huntFrame = 2;
  let currentSeed = seed;
  currentSeed = advanceMultipleStates(currentSeed, 2);
  let state1 = currentSeed >>> 16;
  let state2 = advanceState(currentSeed) >>> 16;
  let pid = calcPID(state1, state2);
  const nature = state1 % 25;

  while(pid % 25 !== nature) {
    currentSeed = advanceState(currentSeed);
    state1 = currentSeed >>> 16;
    currentSeed = advanceState(currentSeed);
    state2 = currentSeed >>> 16;
    pid = calcPID(state1, state2);
    huntFrame = huntFrame + 2;
  }

  return huntFrame;
}

module.exports = { calcOccidental };
