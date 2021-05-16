import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";

@InputType()
export class ProfileCreateInput {
  @Field()
  @IsString()
  @IsOptional()
  bio: string;

}
