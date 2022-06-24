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

f1.apply(obj1, [20, 80]); // 200

f1.apply(obj2, [50, 50]); // 150
