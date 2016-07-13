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
