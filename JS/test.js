let myObj = {
  'hello world': 'hi',
  foo: function (x) {
    return x + 1;
  },
  hello: { k1: 1, k2: 2 },
  world: [1, 2, 3, 4],
};

console.log(myObj);
console.log(myObj['hello world']);
console.log(myObj.foo(1));
console.log(myObj['foo'](1));
console.log(myObj.hello);
console.log(myObj['world']);
console.log(JSON.stringify(myObj));
