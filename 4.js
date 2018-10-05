var obj = {};
var obj2 = new Object();
var arr = new Array();

console.log(obj, obj2);

Array.prototype.forEach = function() {
  return  "🤗";
}

console.log({}.jazzy());


// delete Date.prototype.toString;

var date = new Date();
console.log(date.toString());