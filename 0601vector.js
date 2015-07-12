//  solution to Eloquent JavaScript chapter 6, exercise 1
//
//  a vector type -- create vector object constructor with points
//  properties, plus and minus methods, and length getter

// vector constructor
function Vector(x, y) {
  this.x = x;
  this.y = y;
  
  this.plus = function(inputVector) {
    var newVector = new Vector((this.x + inputVector.x), 
                    (this.y + inputVector.y));
    return newVector;
  };
  
  this.minus = function(inputVector) {
    var newVector = new Vector((this.x - inputVector.x), 
                    (this.y - inputVector.y));
    return newVector;
  };
  
}

// length getter using defineProperty
Object.defineProperty(Vector.prototype, 'length', {  
  get: function() {
    return Math.sqrt((this.x * this.x) + (this.y *this.y));
  }
});


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5