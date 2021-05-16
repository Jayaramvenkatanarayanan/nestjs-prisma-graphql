import { GetUserArgs } from "./dto/args/getuser.args";
import { GetUsersArgs } from "./dto/args/getusers.args";
import { CreateUserInput } from "./dto/input/createUser.input";
import { DeleteUserInput } from "./dto/input/deleteUser.input";
import { UpdateUserInput } from "./dto/input/updateUser.input";
import { User } from "./model/user";
import { UsersService } from "./users.service";
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UsersService);
    getUser(getUserArgs: GetUserArgs): User;
    getUsers(getUsersArgs: GetUsersArgs): User[];
    createUser(createUserData: CreateUserInput): User;
    updateUser(updateUserData: UpdateUserInput): User;
    deleteUser(deleteUserData: DeleteUserInput): User;
}
