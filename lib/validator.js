
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = input => {
  return input.constructor === Array;
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObject = input => {
  if(input.constructor === Array) {
    return false; 
  } else {
    return typeof input === 'object';}
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = input => {
  return typeof input === 'function';
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};


/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = (input) => {
  return input.every(isString);
};

/**
 * Is this an array of numbers?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfNumbers = (input) => {
  return input.every(isNumber);
};

/**
 * Is this an array of objects?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfObjects = (input) => {
  return input.every(isObject);
};

/**
 * Is this an array of booleans?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfBooleans = (input) => {
  return input.every(isBoolean);
};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = (rules) => {

  if(rules === 'string'){
    return isString;
  } 
  if(rules === 'number') {
    return isNumber;
  }
  if(rules === 'array'){
    return isArray;
  } 
  if(rules === 'object') {
    return isObject;
  }
  if(rules === 'boolean'){
    return isBoolean;
  } 
  if(rules === 'function') {
    return isFunction;
  }
  if(rules === 'strings'){
    return isArrayOfStrings;
  } 
  if(rules === 'numbers') {
    return isArrayOfNumbers;
  }
  if(rules === 'objects'){
    return isArrayOfObjects;
  } 
  if(rules === 'booleans') {
    return isArrayOfBooleans;
  }
};

class TypeError extends Error {
  constructor(input) {
    super(`can not coerce into type ${input}`);
  }
}

/**
 * Cast to a string?
 * @param input
 * @returns {string}
 */
const castToString = input => {
  if(isArray(input) || isObject(input)){
    throw new TypeError('string');
  } else {
    return String(input); 
  }
};

/**
 * Cast to a number?
 * @param input
 * @returns {number}
 */
const castToNumber = input => {
  if(isNumber(input)) {
    return input;
  }
  else if(isString(input)) {
    if(!isNaN(Number(input))) {
      return Number(input);
    } else {
      throw new TypeError('number');
    }
  }
  else {
    throw new TypeError('number');
  }
};


module.exports = {
  isString,
  isNumber,
  isArray,
  isObject,
  isFunction,
  isBoolean,

  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,

  getValidator,

  TypeError,
  castToString,
  castToNumber
};


