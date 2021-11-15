a = [1, 2, 3];
a.map((x) => x * x);
console.log(a);
console.log(a.map((x) => x * x));

a = [5, 4, 3, 2, 1];
console.log(a.filter((x) => x < 3));

a = [1, 2, 3, 4, 5];
console.log(a.reduce((prev, curr) => prev + curr, 0));
