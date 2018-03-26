/**
 * Splits a 32 bit number into an array of 16 bit numbers
 * @param {number} num A 32 bit number
 * @return {Array<number>} An array of two 16 bit numbers
 */
function split32BitNum(num) {
  const high = num >>> 16;
  const low = num & 0xFFFF;

  return [high, low];
}

/**
 * Safely adds two 32 bit numbers
 * @param {number} num1 A 32 bit number
 * @param {number} num2 A 32 bit number
 * @return {number} The two numbers added together
 */
function add32bit(num1, num2) {
  const [num1h, num1l] = split32BitNum(num1);
  const [num2h, num2l] = split32BitNum(num2);
  const reth = ((num1h + num2h) & 0xFFFF) << 16;
  const retl = num1l + num2l;

  return (reth + retl) >>> 0;
}

/**
 * Safely multiplies two 32 bit numbers
 * @param {number} num1 A 32 bit number
 * @param {number} num2 A 32 bit number
 * @return {number} The two numbers multiplied together
 */
function multiply32bit(num1, num2) {
  const [num1h, num1l] = split32BitNum(num1);
  const reth = (num1h * num2) << 16;
  const retl = (num1l * num2);

  return (reth + retl) >>> 0;
}

module.exports = { add32bit, multiply32bit };
