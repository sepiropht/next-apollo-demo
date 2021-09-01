var casual = require('casual')

const faker = require('faker')

// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism
var sentence = casual.sentence

// Generate random city name
var city = casual.city

// Define custom generator
casual.define('point', function () {
  return {
    x: Math.random(),
    y: Math.random(),
  }
})

// Generate random point
const persons = []
var point = casual.point
for (let i = 0; i < 2000; i++) {
  persons.push({
    name: casual.name, // 'Alberto'
    username: casual.username, // 'Darryl'
    address: casual.address, // 'Derek'
    email: casual.email, // 'Considine'
    fullName: casual.full_name, // 'Synchronised optimal concept'
    phone: casual.phone,
  })
}
console.log(persons)
console.log(faker.user)
