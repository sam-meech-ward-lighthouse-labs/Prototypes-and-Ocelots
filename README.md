# [[Prototype]]


* Class:
  * blueprint
  * give us some structure that objects can inherit.
  * When you create an instance of a class, you get an object built from that blueprint.

* In JavaScript there is no such thing as a class.
* How do prototypes work in JavaScript.

**There is no correct way of doing OO on JS**

**How does property lookup work in JavaScript?**

[[Prototype]]

* Every object has a prototype.
* A prototype is an object.
* It's just objects linked to other objects.

`.__proto__`
`.prototype`
`Object.getPrototypeOf`

```js
Object.getPrototypeOf(ocelot);
Object.setPrototypeOf(ocelot, duck);
```

**How does property lookup work in JavaScript?**

## Constructor Functions

* Almost every function has a property called `.prototype`
* `.prototype` only exists on functions.

```js
function Coffee() {
  // 1. Create a new empty object
  var obj = {};
  // Make sure that `this` evaluates to the empty object.
  
  // 2. Make that object's [[Prototype]] equal to Function.prototype
  obj.__proto__ = Coffee.prototype;

  // 3. Returns the object.
  return obj;
}
Coffee.prototype = {};
```

## Links

* https://github.com/getify/You-Dont-Know-JS/tree/master/this%20&%20object%20prototypes
* [Fun fun function](https://www.youtube.com/watch?v=GhbhD1HR5vk&index=1&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub)