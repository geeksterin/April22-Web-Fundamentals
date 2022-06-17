var data = [30, 40, 50, 20, 10]; // [40,50,60,30,20]

var newArray = data.map(function (element, index) {
  console.log(element, index);
  return element * 10;
});

console.log(newArray);
