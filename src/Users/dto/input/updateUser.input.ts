import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field({nullable:true})
  @IsOptional()
  @IsNotEmpty()
  age?: number;

  @Field({nullable:true})
  @IsOptional()
  isSubscribed?:boolean
}
