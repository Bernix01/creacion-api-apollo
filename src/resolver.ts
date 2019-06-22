import { Producto } from './entities/producto'
import { Resolver, Query, Ctx } from 'type-graphql'
import { Context } from 'apollo-server-core'

export const resolver = {
  Query: {
    helloWorld(_: void, args: void): string {
      return 'Hola mundo'
    }
    // todosLosProductos(_:void,args:void): Producto[]{
    //   //llamar a la base orm o directamente o por rest
    // }
  }
}

@Resolver(Producto)
export class ProductoResolver {

  //Un query que retorna el tipo de dato Producto
  @Query(() => [Producto])
  getAll(@Ctx() { user }: Context<{ user: string }>) {
    console.log(`El usuario solicitante es ${user}`)
    return [new Producto('Producto a'), new Producto('producto b')]
  }
}
