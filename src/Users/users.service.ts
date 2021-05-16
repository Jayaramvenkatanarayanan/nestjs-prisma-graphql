import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { GetUserArgs } from "./dto/args/getuser.args";
import { GetUsersArgs } from "./dto/args/getusers.args";
import { CreateUserInput } from "./dto/input/createUser.input";
import { DeleteUserInput } from "./dto/input/deleteUser.input";
import { UpdateUserInput } from "./dto/input/updateUser.input";
import { User } from "./model/user";

@Injectable()
export class UsersService {
    private users: User[] = [];

    public createUser(createUserData: CreateUserInput): User {
        const user: User = {
            userId: uuidv4(),
            ...createUserData
        }

        this.users.push(user);

        return user;
    }

    public updateUser(updateUserData: UpdateUserInput): User {
        const user = this.users.find(user => user.userId === updateUserData.userId);

        Object.assign(user, updateUserData);

        return user;
    }

    public getUser(getUserArgs: GetUserArgs): User {
        return this.users.find(user => user.userId === getUserArgs.userId);
    }

    public getUsers(getUsersArgs: GetUsersArgs): User[] {
        return getUsersArgs.userId.map(userId => this.getUser({ userId }));
    }

    public deleteUser(deleteUserData: DeleteUserInput): User {
        const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId);

        const user = this.users[userIndex];

        this.users.splice(userIndex);

        return user;
    }
}
