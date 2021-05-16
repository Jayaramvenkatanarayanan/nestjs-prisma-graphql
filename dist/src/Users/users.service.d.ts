import { GetUserArgs } from "./dto/args/getuser.args";
import { GetUsersArgs } from "./dto/args/getusers.args";
import { CreateUserInput } from "./dto/input/createUser.input";
import { DeleteUserInput } from "./dto/input/deleteUser.input";
import { UpdateUserInput } from "./dto/input/updateUser.input";
import { User } from "./model/user";
export declare class UsersService {
    private users;
    createUser(createUserData: CreateUserInput): User;
    updateUser(updateUserData: UpdateUserInput): User;
    getUser(getUserArgs: GetUserArgs): User;
    getUsers(getUsersArgs: GetUsersArgs): User[];
    deleteUser(deleteUserData: DeleteUserInput): User;
}
