const stat = require('./node-export');

console.log(stat);

let mea = stat.mean([1, 3, 5, 7, 9]); // => 5
let std = stat.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)
console.log(mea);
console.log(std);
