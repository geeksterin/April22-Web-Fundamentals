var student = {
  name: "S1",
  result: function (a, b) {
    var num1 = a;
    var num2 = b;
    console.log(num1 + num2);
    console.log("Passed");
  },
  marks: [70, 80, 90, 100],
};

student.result(20, 80);
console.log(student.marks);
console.log(student.marks[2]);
