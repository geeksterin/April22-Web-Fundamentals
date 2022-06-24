function fn() {
  console.log(x); // undefined  // JS Engine  // separate session
  var x;
  x = 100;
}

fn();
