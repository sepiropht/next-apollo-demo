const { gql } = require('apollo-server')
const casual = require('casual')

const typeDefs = gql`
  type Person {
    name: String
    address: String
    email: String
    phone: String
  }
  type Query {
    persons: [Person]
  }
`

const persons = []
for (let i = 0; i < 2000; i++) {
  persons.push({
    name: casual.name,
    address: casual.address,
    email: casual.email,
    phone: casual.phone,
  })
}

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    persons: () => persons,
  },
}

module.exports = { resolvers, typeDefs }
