function fn() {
  let a = 100;

  function fn1() {
    let b = 50;

    console.log(a);
    if (b > 40) {
      var c = 120;
    }
    console.log(c);
  }

  fn1();
}

fn();
