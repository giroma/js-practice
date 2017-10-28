// js practice

var example, example2;

const name = 'darcy'
const person = {
  name: 'ari',
  changeHair: function () {
    // this = person object
    person.hair = 'blue'
  },
  driveCar: function (type) {
    console.log(`${person.name} is driving a ${type}`)
  },
  age: 52,
  licence: null
}

// usage of a constant
person.name = 'ahmad' // fine
person.changeHair()
person.driveCar('BMW')
// person = {} // throw and error

// create a class
class animal {
  constructor (value) {
    this._legs = value
  }
  run () {
    console.log('animal is running')
  }
  get legs () {
    return this._legs
  }
  set legs (value) {
    this._legs = value
  }
}

// use that class
var cat = new animal(2)
cat.legs = 4
console.log(cat.legs)
cat.run()

// extend that class
class dog extends animal {
  constructor () {
    super()
  }
}
var lassy = new dog(6)
console.log(lassy.legs)


// usage of a function with private members
function people (type) {
  var privateValue = 'foo'
  this.heritage = type
  this.migrate = function () {
    console.log(`move the ${this.heritage} people north`)
  }
}

var canadians = new people('canadian')
canadians.migrate()
console.log(canadians.heritage) // canadian
console.log(canadians.privateValue) // undefined

example = 'example string'
example = example.replace('string', 'writing')

console.log(example2);

for(var x = 0; x < 10; x++) {
  example2 = x;
  console.log(example2);
}

console.log(example2) // 10
console.log(example)

roundUp = 456.55
h = Math.round(roundUp)

console.log(h)
