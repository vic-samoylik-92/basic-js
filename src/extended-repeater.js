const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";

  result += str;

  if (options.hasOwnProperty("addition")) {
    let addition = String(options.addition);
    if (options.hasOwnProperty("additionSeparator")) {
      addition += String(options.additionSeparator);
      options.additionRepeatTimes > 1
        ? (addition = addition
            .repeat(options.additionRepeatTimes)
            .slice(0, -options.additionSeparator.length))
        : (addition = addition.slice(0, -options.additionSeparator.length));
    } else {
      addition += "|";
      options.additionRepeatTimes > 1
        ? (addition = addition.repeat(options.additionRepeatTimes).slice(0, -1))
        : (addition = addition.slice(0, -1));
    }

    result += addition;
  }

  let wholeRepeat = "";

  if (options.hasOwnProperty("separator")) {
    result += String(options.separator);
    if (options.repeatTimes > 1) {
      wholeRepeat = result
        .repeat(options.repeatTimes)
        .slice(0, -options.separator.length);
    } else {
      wholeRepeat = result.slice(0, -options.separator.length);
    }
  } else {
    result += "+";
    if (options.repeatTimes > 1) {
      wholeRepeat = result.repeat(options.repeatTimes).slice(0, -1);
    } else {
      wholeRepeat = result.slice(0, -1);
    }
  }

  return wholeRepeat;
}

module.exports = {
  repeater
};
