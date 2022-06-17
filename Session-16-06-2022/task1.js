var arr = [20, 30, 39, 29, 21, 34, 68];

var newData = arr.filter(function (element) {
  return element % 2 === 0;
});

console.log(newData);
