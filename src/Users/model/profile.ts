import 'reflect-metadata'
import { ObjectType, Field, ID, Int } from '@nestjs/graphql'
import { User } from './user'

@ObjectType()
export class Profile {
  @Field((type) => Int)
  id: number

  @Field((type) => String)
  bio: string

  @Field((type) => User, { nullable: true })
  author?: User | null

  @Field((type) => Int)
  userId: number
}