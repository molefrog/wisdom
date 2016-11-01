exports.repeat = function(source, times) {
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


exports.arrayTimes = function(source, element) {

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
exports.dividedFlags = dividedFlags

exports.isPrime = function(number) {
  var result;
  var arrayOfFlags = dividedFlags(number);

  if (number == 0)
    return false

  if (number == 1)
    return false

  if (number == 2)
    return true

  for (var i = 0; i < arrayOfFlags.length; ++i) {
    if (arrayOfFlags[i] == true) {
      return false
    }
  }

  return true;
}
