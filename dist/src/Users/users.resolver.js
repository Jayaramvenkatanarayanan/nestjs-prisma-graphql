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
const createUser_input_1 = require("./dto/input/createUser.input");
const user_1 = require("./model/user");
const prisma_service_1 = require("../prisma.service");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const post_1 = require("./model/post");
let UserResolver = class UserResolver {
    constructor(userService, prismaService) {
        this.userService = userService;
        this.prismaService = prismaService;
    }
    async posts(user, ctx) {
        return this.prismaService.user
            .findUnique({
            where: {
                id: user.id,
            },
        })
            .posts();
    }
    async profile(user, ctx) {
        return this.prismaService.user
            .findUnique({
            where: {
                id: user.id,
            },
        })
            .profile();
    }
    async allUsers(ctx) {
        return this.userService.getAllUser();
    }
    async newUser(data, ctx) {
        return this.userService.createUser(data);
    }
    async getUser(id, ctx) {
        return this.userService.getUser(id);
    }
    async togglePublishPost(id) {
        return this.userService.postUpdate(id);
    }
    async deleteUser(id) {
        return this.userService.deleteUser(id);
    }
    async getAllPost() {
        return await this.prismaService.$queryRaw('select * from "public"."Post"');
    }
};
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Root()), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "posts", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Root()), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "profile", null);
__decorate([
    graphql_1.Query(() => [user_1.User], { nullable: "items" }),
    __param(0, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "allUsers", null);
__decorate([
    graphql_1.Mutation(() => user_1.User),
    __param(0, graphql_1.Args("data")),
    __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_input_1.CreateUserInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "newUser", null);
__decorate([
    graphql_1.Query(() => user_1.User, { nullable: true }),
    __param(0, graphql_1.Args("id")), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
__decorate([
    graphql_1.Mutation(() => post_1.Post, { nullable: true }),
    __param(0, graphql_1.Args("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "togglePublishPost", null);
__decorate([
    graphql_1.Mutation(() => user_1.User, { nullable: true }),
    __param(0, graphql_1.Args("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    graphql_1.Query(() => [post_1.Post]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAllPost", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_1.User),
    __param(1, common_1.Inject(prisma_service_1.PrismaService)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        prisma_service_1.PrismaService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=users.resolver.js.map