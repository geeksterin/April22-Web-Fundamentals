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

// f1(20, 30); // obj1
// f1(40, 50); //obj2

f1.call(obj1, 20, 30); //150
f1.call(obj2, 20, 30); // 100
f1.call(obj3, 100, 200);
