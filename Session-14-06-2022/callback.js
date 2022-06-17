function fnCallback(printName) {
  printName();

  console.log("I am from Main Function");
  printName();
  printName();
}

fnCallback(function () {
  console.log("I am Kabir");
});
