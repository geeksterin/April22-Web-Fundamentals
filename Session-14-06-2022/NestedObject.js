var student = {
  id: 101,
  name: "S1",
  address: {
    city: "Banglore",
    area: {
      area1: "A1",
      area2: "A2",
    },
    state: "KA",
    pincode: 399988,
  },
  email: "S1@gmail.com",
};

console.log(student.address.city);
console.log(student.address.area.area2);
