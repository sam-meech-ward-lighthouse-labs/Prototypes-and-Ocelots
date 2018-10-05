var ocelot = {
  awake: false,
  nap: function() {
    console.log("💤", this.awake);
  }
};

var duck = {
  awake: true,
  quack: function() {
    console.log("🦆", this.awake);
  }
}

ocelot.nap();
duck.quack();

ocelot.__proto__ = duck;

ocelot.quack();