
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(10);

//enum keys in object
console.log('*******enum keys in object********');
for (var key in circle) {
  console.log(key);
}

//enum values in object
console.log('*******enum values in object*******');
for (var key in circle) {
  console.log(circle[key]);
}

//enum key:val pairs
console.log('*******enum key:val pairs*******');
for (var key in circle) {
  console.log(`${key} : ${circle[key]}`);
}

//object method variation
console.log('*******object method variation*******');
const keys = Object.keys(circle);
console.log(keys);

//check for existence of key in object
console.log('*******check for existence of key in object*******');
if ('radius' in circle) {
  console.log('circle has a radius...BITCH!!!');
}
