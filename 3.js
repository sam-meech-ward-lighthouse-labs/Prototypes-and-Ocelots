function Coffee(cream, sugar) {
  // Creates a new empty object
  this.cream = cream;
  this.sugar = sugar;
}

Coffee.prototype.makeMePoop = function() {
  console.log("💩");
};

var cupOfCoffee = new Coffee(true, false);
var nastyCoffee = new Coffee(false, true);
console.log(cupOfCoffee);
console.log(nastyCoffee);

cupOfCoffee.makeMePoop();

console.log(cupOfCoffee.__proto__ === Coffee.prototype);
console.log(cupOfCoffee.__proto__ === Object);
