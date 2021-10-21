//Use IIFE
(() => {
  let obj = { x: 100, y: 200, z: 300 };
  //short-hand
  let { x, y } = obj;
  console.log(x, y);
})();

console.log('*******');

//Use IIFE
//swap
(() => {
  let x = 100;
  let y = 200;
  [x, y] = [y, x];
  console.log(x, y);
})();
