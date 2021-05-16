import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsOptional, IsString } from "class-validator";
import {PostCreateInput} from './userPost.input'
import {ProfileCreateInput} from './userProfile.input';
@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name: string

  @Field((type) => [PostCreateInput], { nullable: true })
  posts: [PostCreateInput]

  @Field((type)=> ProfileCreateInput,{nullable:true})
  profile:ProfileCreateInput
}
