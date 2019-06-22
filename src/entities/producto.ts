import { ObjectType, Field } from 'type-graphql'
@ObjectType({ description: 'este es un product' })
export class Producto {
    //Campo expuesto por graphql
  @Field()
  nombre: string

  //Campo no expuesto por graphql
  codigo: string

  constructor(nombre: string) {
    this.nombre = nombre
    this.codigo = 'asd'
  }
}
