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
exports.Post = void 0;
require("reflect-metadata");
const graphql_1 = require("@nestjs/graphql");
const user_1 = require("./user");
let Post = class Post {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    graphql_1.Field((type) => Date),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field((type) => Date),
    __metadata("design:type", Date)
], Post.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    graphql_1.Field((type) => String, { nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    graphql_1.Field((type) => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Post.prototype, "published", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Post.prototype, "viewCount", void 0);
__decorate([
    graphql_1.Field((type) => user_1.User, { nullable: true }),
    __metadata("design:type", user_1.User)
], Post.prototype, "author", void 0);
Post = __decorate([
    graphql_1.ObjectType()
], Post);
exports.Post = Post;
//# sourceMappingURL=post.js.map