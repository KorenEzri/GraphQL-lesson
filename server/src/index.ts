import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql/books'

const app = express()

app.use(
  cors({
    allowedHeaders: ['Content-Type'],
    origin: '*',
    preflightContinue: true,
  })
)
;(async () => {
  const server = new ApolloServer({ typeDefs, resolvers })

  await server.start()

  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}ql`
    )
  )
})()
