import { UsersService } from "./Users/users.service";
import { UsersModule } from "./Users/users.module";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import {PrismaService} from './prisma.service'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [PrismaService,UsersService],
})
export class AppModule {}
