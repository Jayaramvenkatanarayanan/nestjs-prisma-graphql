import "reflect-metadata";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsEmail } from "class-validator";
import { Post } from "./post";
import { Profile } from "./Profile";
@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => [Post], { nullable: true })
  posts?: [Post] | null;

  @Field(() => Profile, { nullable: true })
  profile?: Profile | null;
}
