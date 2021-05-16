import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { UsersService } from './users.service';
import { PrismaService } from "../prisma.service";

@Module({
    providers: [UserResolver,UsersService,PrismaService],
})
export class UsersModule {}
