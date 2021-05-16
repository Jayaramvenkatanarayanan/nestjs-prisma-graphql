"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const getuser_args_1 = require("./dto/args/getuser.args");
const getusers_args_1 = require("./dto/args/getusers.args");
const createUser_input_1 = require("./dto/input/createUser.input");
const deleteUser_input_1 = require("./dto/input/deleteUser.input");
const updateUser_input_1 = require("./dto/input/updateUser.input");
const user_1 = require("./model/user");
const users_service_1 = require("./users.service");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    getUser(getUserArgs) {
        return this.userService.getUser(getUserArgs);
    }
    getUsers(getUsersArgs) {
        return this.userService.getUsers(getUsersArgs);
    }
    createUser(createUserData) {
        return this.userService.createUser(createUserData);
    }
    updateUser(updateUserData) {
        return this.userService.updateUser(updateUserData);
    }
    deleteUser(deleteUserData) {
        return this.userService.deleteUser(deleteUserData);
    }
};
__decorate([
    graphql_1.Query(() => user_1.User, { name: 'user', nullable: true }),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getuser_args_1.GetUserArgs]),
    __metadata("design:returntype", user_1.User)
], UserResolver.prototype, "getUser", null);
__decorate([
    graphql_1.Query(() => [user_1.User], { name: 'users', nullable: 'items' }),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getusers_args_1.GetUsersArgs]),
    __metadata("design:returntype", Array)
], UserResolver.prototype, "getUsers", null);
__decorate([
    graphql_1.Mutation(() => user_1.User),
    __param(0, graphql_1.Args('createUserData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_input_1.CreateUserInput]),
    __metadata("design:returntype", user_1.User)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Mutation(() => user_1.User),
    __param(0, graphql_1.Args('updateUserData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateUser_input_1.UpdateUserInput]),
    __metadata("design:returntype", user_1.User)
], UserResolver.prototype, "updateUser", null);
__decorate([
    graphql_1.Mutation(() => user_1.User),
    __param(0, graphql_1.Args('deleteUserData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteUser_input_1.DeleteUserInput]),
    __metadata("design:returntype", user_1.User)
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=users.resolver.js.map