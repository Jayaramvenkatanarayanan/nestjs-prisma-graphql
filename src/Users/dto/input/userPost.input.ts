import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";

@InputType()
export class PostCreateInput {
  @Field()
  @IsString()
  @IsOptional()
  title: string;

  @Field({ nullable: true })
  content: string;
}
