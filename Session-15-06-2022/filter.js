var data = [20, 56, , 70, 79, 89, 12, 11, 56, 100, 110];

var filteredData = data.filter(function (e) {
  //-----------
  return e > 50 && e < 90;
});

console.log(data);

console.log(filteredData);
