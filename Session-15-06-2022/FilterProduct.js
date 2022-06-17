var products = [
  {
    brand: "Apple",
    pname: "Iphone 12 Pro",
    price: 110000,
  },
  {
    brand: "Apple",
    pname: "Iphone 13 Pro",
    price: 130000,
  },
  {
    brand: "Apple",
    pname: "Iphone 11 Pro",
    price: 100000,
  },
  {
    brand: "Samsung",
    pname: "Galaxy ",
    price: 110000,
  },
  {
    brand: "Samsung",
    pname: "Note 9",
    price: 90000,
  },
  {
    brand: "Vivo",
    pname: "vivo A23",
    price: 60000,
  },
];

var filteredProducts = products.filter(function (element) {
  return element.price > 100000;
});

console.log(filteredProducts);
