class Animal {
  poop() {
    console.log("💩");
  }
}

class Duck extends Animal {
  quack() {
    console.log("🦆");
  }
}

const larry = new Duck();
larry.quack();
larry.poop();

delete larry.quack;

typeof Duck // function
Duck.prototype.quack();
larry.__proto__ === Duck.prototype
larry.__proto__.quack();
larry.quack();