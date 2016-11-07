function repeat(source, times) {
  var repeated = '';
  times = times || 1;

  if (typeof source !== 'string') {
    throw "'" + source + "' isn't string, it is " + typeof source + "."
  }

  if (typeof times !== 'number') {
    throw new Error('Second argument should be a number!');
  }

  for (i = 1; i <= times; ++i ) {
    repeated += source;
  }

  return repeated;
}

function arrayTimes(source, element) {

  var times = 0;

  for (i = 0; i !== source.length; ++i) {

    if ( source[i] === element ) {
      times = times + 1;
    }
  }

  return times;
}

function dividable(a,b) {
  return !(a % b);
}

function dividedFlags(number) {
  var flags = [];
  for (var i = 2; i < number; ++i) {
    flags.push(dividable(number, i));
  }

  return flags;
}

// count([1,2,3], 3) => 1
// count([1,2,4], 3) => 0
// count([], 3)      => 0
// count([3,3,1], 3) => 2
function count(array, elem) {
  return countWhere(array, function(x) {
    return elem == x
  });
}

function countWhere(array, predicate) {
  var count = 0;
  for (var i = 0; i < array.length; ++i) {
    if (predicate(array[i])) {
      count++;
    }
  }

  return count;
}


// hasElement([1,2,3], 3) => true
// hasElement([1,2,4], 3) => false
// hasElement([], 3)      => false
function hasElement(array, elem) {
  return count(array, elem) > 0;
}

// hasTrue([false, false, false]) => false
// hasTrue([]) => false
// hasTrue([true, false]) => true
function hasTrue(array) {
  return hasElement(array, true);
}

function isPrime(number) {
  if (number == 0)
    return false

  if (number == 1)
    return false

  return !hasTrue(dividedFlags(number));
}

function lastDigit(number) {
  return Math.floor(number) % 10;
}

function digits(number) {
  var result = [];
  var rem;

  if (number == 0)
    return [0];

  for (; number ;) {
    rem = number % 10;
    number = Math.floor(number / 10);

    result.push(rem);
  }

  return result.reverse();
}

module.exports = {
  repeat: repeat,
  arrayTimes: arrayTimes,
  dividable: dividable,
  dividedFlags: dividedFlags,
  hasElement: hasElement,
  hasTrue: hasTrue,
  isPrime: isPrime,
  count: count,
  countWhere: countWhere,
  lastDigit: lastDigit,
  digits: digits
}
