/**
 * Calculates a Pokemon's PID
 * @param {number} state1 A 16 bit PRNG state
 * @param {number} state2 A 16 bit PRNG state
 * @return {number} A Pokemon's PID
 */
function calcPID(state1, state2) {
  return (state2 * 0x10000) + state1;
}

module.exports = { calcPID };
