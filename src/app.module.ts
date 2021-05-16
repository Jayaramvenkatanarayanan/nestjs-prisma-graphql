import { UsersService } from "./Users/users.service";
import { UsersModule } from "./Users/users.module";
import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
