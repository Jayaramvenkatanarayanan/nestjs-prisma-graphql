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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let UsersService = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAllUser() {
        return await this.prismaService.user.findMany();
    }
    async createUser(createUserData) {
        var _a;
        const postData = (_a = createUserData.posts) === null || _a === void 0 ? void 0 : _a.map((post) => {
            return { title: post.title, content: post.content || undefined };
        });
        const profileData = createUserData.profile;
        return await this.prismaService.user.create({
            data: {
                email: createUserData.email,
                name: createUserData.name,
                posts: {
                    create: postData,
                },
                profile: {
                    create: profileData,
                },
            },
        });
    }
    async getUser(id) {
        return this.prismaService.user.findUnique({
            where: { id },
        });
    }
    async postUpdate(id) {
        const post = await this.prismaService.post.findUnique({
            where: { id: id || undefined },
            select: {
                published: true,
            },
        });
        return this.prismaService.post.update({
            where: { id: id || undefined },
            data: { published: !(post === null || post === void 0 ? void 0 : post.published) },
        });
    }
    async deleteUser(id) {
        return await this.prismaService.user.delete({
            where: { id: id },
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map