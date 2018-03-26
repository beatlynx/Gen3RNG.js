const _ = require('lodash');
const { advanceState, advanceMultipleStates } = require('./gen3.prng.js');
const { calcOccidental } = require('../utils/calcOccidental.js');
const { calcGender } = require('../utils/calcGender.js');
const { calcIVs } = require('../utils/calcIVs.js');
const { calcPID } = require('../utils/calcPID.js');

/**
 * @typedef {Object} Frame
 * @property {string} pid A Pokemon's PID as a 32 bit hex string
 * @property {number} nature A Pokemon's nature
 * @property {number} psv A Pokemon's shiny value
 * @property {IVValues} ivs A Pokemon's IVs
 * @property {number} ability A Pokemon's ability
 * @property {number} gender A Pokemon's gender
 */

/**
 * @typedef {Array} State
 * @property {number} pid1 The first PID state
 * @property {number} pid2 The second PID state
 * @property {number} ivs1 The first IV state
 * @property {number} ivs2 The second IV state
*/

/**
 * Calculates PRNG states for a frame
 * @param {number} seed An LCRNG state
 * @param {number} methodNum The method number to use - 1, 2, or 4
 * @param {boolean} isMethodH Determines if the method is an H method
 * @return {State} An array of four 16 bit states for PIDs and IVs
 */
function calcStates(seed, methodNum, isMethodH) {
  let currentSeed = seed;
  const stateAdvances = {
    1: [0, 1, 2, 3],
    2: [0, 1, 3, 4],
    4: [0, 1, 2, 4]
  };

  if (isMethodH) {
    const occidental = calcOccidental(currentSeed) - 1;
    currentSeed = advanceMultipleStates(currentSeed, occidental);
  }

  return _.reduce(_.range(0, 5), (result, value, index) => {
    if (_.includes(stateAdvances[methodNum], index)) {
      const state = currentSeed >>> 16;

      result.push(state);
    }

    currentSeed = advanceState(currentSeed);
    return result;
  }, []);
}

/**
 * Calculates a Method 1, 2, or 4 frame
 * @param {number} seed An LCRNG state
 * @param {number} methodNum The method number to use - 1, 2, or 4
 * @param {boolean} isMethodH Determines if the method is an H method
 * @return {Frame} The frame result
 */
function calcFrame(seed, methodNum, isMethodH) {
  const [pidl, pidh, ivs1, ivs2] = calcStates(seed, methodNum, isMethodH);
  const pid = calcPID(pidl, pidh);

  return {
    pid: _.padStart(pid.toString(16).toUpperCase(), 8, '0'),
    nature: pid % 25,
    psv: (pidl ^ pidh) >>> 3,
    ivs: calcIVs(ivs1, ivs2),
    ability: pid & 1,
    gender: calcGender(pid)
  };
}

/**
 * Calculates multiple Method 1, 2, or 4 frames
 * @param {number} seed An LCRNG state
 * @param {number} methodNum The method number to use - 1, 2, or 4
 * @param {boolean} isMethodH Determines if the method is an H method
 * @param {number} length The number of frames to calculate
 * @return {Array<Frame>} The frame results
 */
function calcFrames(seed, methodNum, isMethodH, length) {
  let currentSeed = seed;

  return _.map(_.range(0, length), (value) => {
    const frame = _.assign({ frame: value + 1 }, calcFrame(currentSeed, methodNum, isMethodH));

    currentSeed = advanceState(currentSeed);
    return frame;
  });
}

module.exports = { calcFrame, calcFrames };
