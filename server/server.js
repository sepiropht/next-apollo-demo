const express = require('express')
const cors = require('cors')
const { typeDefs, resolvers } = require('./schema')
const { ApolloServer } = require('apollo-server-express')

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers })

  const app = express()

  await server.start()

  server.applyMiddleware({ app })

  const port = process.env.PORT || 5000

  app.use(
    cors({
      origin: process.env,
    })
  )
  app.listen(port, (err) => {
    if (err) throw err
    console.log(`Graphql Server started on: http://localhost:${port}`)
  })
}

main()
