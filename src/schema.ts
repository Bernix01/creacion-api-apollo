import { makeExecutableSchema } from 'graphql-tools'
import 'graphql-import-node'
import * as typeDefs from './schema.graphql'
import { resolver, ProductoResolver } from './resolver'
import { buildSchemaSync } from 'type-graphql'

export const schema = makeExecutableSchema({ typeDefs, resolvers: resolver })

export const schema2 = buildSchemaSync({ resolvers: [ProductoResolver] })
