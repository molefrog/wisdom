var repeat = require('./src/useless-funcs').repeat;


/// tests for Repeat Function.
console.log('Tests for Repeat Function \n=========================\n')

console.log( repeat('kek', 25)      );
console.log( repeat(25, 25)         );
console.log( repeat('', 25)         );
console.log( repeat(undefined, 25)  );
