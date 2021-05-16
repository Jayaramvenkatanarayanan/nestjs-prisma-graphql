import { Resolver,Query, Args, Mutation } from "@nestjs/graphql";
import { GetUserArgs } from "./dto/args/getuser.args";
import { GetUsersArgs } from "./dto/args/getusers.args";
import { CreateUserInput } from "./dto/input/createUser.input";
import { DeleteUserInput } from "./dto/input/deleteUser.input";
import { UpdateUserInput } from "./dto/input/updateUser.input";
import { User } from "./model/user";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}


  @Query(() => User,{name:'user',nullable:true})
  public getUser(@Args() getUserArgs:GetUserArgs ):User{
      return this.userService.getUser(getUserArgs)
  }

  // get all users
  @Query(() => [User], { name: 'users', nullable: 'items' })
 public getUsers(@Args() getUsersArgs:GetUsersArgs):User[]{
    return this.userService.getUsers(getUsersArgs)
 }

 // createUser
@Mutation(()=>User)
 public createUser(@Args('createUserData') createUserData:CreateUserInput ):User{
    return this.userService.createUser(createUserData)
 }


// createUser
@Mutation(()=>User)
public updateUser(@Args('updateUserData') updateUserData:UpdateUserInput):User{
    return this.userService.updateUser(updateUserData)
 }


 // createUser
@Mutation(()=>User)
 public deleteUser(@Args('deleteUserData') deleteUserData:DeleteUserInput):User{
    return this.userService.deleteUser(deleteUserData)
 }

}
