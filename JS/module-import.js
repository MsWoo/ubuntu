const stat1 = require('./module-export');

console.log(stat1);

mea = stat1.mean([1, 3, 5, 7, 9]); // => 5
std = stat1.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
console.log(mea);
console.log(std);
