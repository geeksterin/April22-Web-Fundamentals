var obj1 = {
  c: 100,
};

var obj2 = {
  c: 50,
};
var obj3 = {
  c: 1000,
};

function f1(x, y) {
  var a = x;
  var b = y;

  console.log(a + b + this.c);
}

var k = f1.bind(obj1, 2, 3); //105
k(); // 105

var n = f1.bind(obj2, 2, 3);
n(); //55

var f2 = f1.bind(obj3);
f2(10, 20);

f1.bind(obj1, 20, 30)();

f1.bind(obj3)(10, 20);
