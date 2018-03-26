/**
 * @typedef {Object} GenderValues
 * @property {string} female125 A Pokemon's Gender whose species is 12.5% female - 'M' or 'F'
 * @property {string} female25 A Pokemon's Gender whose species is 25% female - 'M' or 'F'
 * @property {string} female50 A Pokemon's Gender whose species is 50% female - 'M' or 'F'
 * @property {string} female75 A Pokemon's Gender whose species is 75% female - 'M' or 'F'
 */

/**
 * Calculates gender using a Pokemon's PID
 * @param {number} pid A Pokemon's PID
 * @return {GenderValues} An object of Pokemon gender values
 */
function calcGender(pid) {
  const genderValue = pid & 0xFF;

  return {
    female125: (genderValue >= 31) ? 'M' : 'F',
    female25: (genderValue >= 63) ? 'M' : 'F',
    female50: (genderValue >= 127) ? 'M' : 'F',
    female75: (genderValue >= 191) ? 'M' : 'F'
  };
}

module.exports = { calcGender };
