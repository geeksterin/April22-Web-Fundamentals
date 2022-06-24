class Mobile {
  name;
  price;
  rating;
  qty;
  totalAmt;

  constructor() {
    this.name = "";
    this.price = 0;
    this.rating = 0;
    this.qty = 0;
    this.totalAmt = 0;
  }

  display() {
    console.log(this.name, this.price, this.rating, this.qty);
  }

  totalAmount() {
    console.log(this.price * this.qty);
  }
}

var iphone = new Mobile();

var oneplus = new Mobile();

iphone.name = "Iphone 13Pro";
iphone.price = 110000;
iphone.qty = 5;
iphone.rating = 4.8;

oneplus.name = "Oneplus 9pro";
oneplus.price = 60000;
oneplus.rating = 4.5;
oneplus.qty = 10;

iphone.display();
oneplus.display();

iphone.totalAmount();
oneplus.totalAmount();
