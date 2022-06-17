var arr = [20, 30, 39, 29, 21, 34, 68]; // + 10 to even and * 10 to odd number

var newarray = arr.map(function (ele) {
  if (ele % 2 === 0) {
    return ele + 10;
  } else {
    // [30,40,390,290,210,44,78]
    return ele * 10;
  }
});

console.log(newarray);
