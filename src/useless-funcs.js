var repeat = function(string, number) {
  var newString = '';

  if (string === '') {
    return "Your string doesn't have any words."
  } else if (typeof string !== 'string') {
    return "'" + string + "' isn't string, it is " + typeof string + "."
  }

  for (i = 1; i <= number; ++i ) {
    newString += string;
  }

  return 'Your repeated string: ' + newString;
}

module.exports = {
  'repeat': repeat
}
