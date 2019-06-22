import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import dephtLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import compression from 'compression'
import cors from 'cors'
import { schema2 } from './schema'

const app = express()
const apolloServer = new ApolloServer({
  schema: schema2,
  context: () => {
      // opcional obtener un usuario por db
    return {
      user: 'foo'
    }
  },
  validationRules: [dephtLimit(8)]
})

app.use('*', cors())
app.use(compression())

apolloServer.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)

httpServer.listen(
  { port: 3000 },
  (): void => {
    console.log(`GraphQL corriendo en http://localhost:3000/graphql`)
  }
)
