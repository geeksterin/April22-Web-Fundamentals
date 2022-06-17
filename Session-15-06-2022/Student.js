var student = {
  name: "Geekster",
  address: {
    city: "Pune",
    state: "MH",
  },
  marks: [
    { sname: "HTML", score: 80, length: 4 },
    { sname: "CSS", score: 60 },
    { sname: "JS", score: 90 },
  ],
};

// Print the JS Object
console.log(student.marks.length); //code //3

console.log(student.marks[2].sname);
