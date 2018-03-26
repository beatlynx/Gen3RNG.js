/**
 * @typedef {Object} IVValues
 * @property {string} iv32 A 32 bit hex representation of a Pokemon's IVs
 * @property {number} hpiv The HP IV value
 * @property {number} atkiv The Atk IV value
 * @property {number} defiv The Def IV value
 * @property {number} spaiv The SpA IV value
 * @property {number} spdiv The SpD IV value
 * @property {number} speiv The Spe IV value
 */

/**
 * Calculates IVs
 * @param {number} state1 A 16 bit PRNG state
 * @param {number} state2 A 16 bit PRNG state
 * @return {IVValues} A Pokemon's calculated IVs
 */
function calcIVs(state1, state2) {
  const iv32 = (state2 * 0x10000) + state1;

  return {
    iv32: iv32.toString(16).toUpperCase(),
    hpiv: iv32 & 0x1F,
    atkiv: (iv32 >> 5) & 0x1F,
    defiv: (iv32 >> 10) & 0x1F,
    spaiv: (iv32 >> 21) & 0x1F,
    spdiv: (iv32 >> 26) & 0x1F,
    speiv: (iv32 >> 16) & 0x1F
  };
}

module.exports = { calcIVs };
