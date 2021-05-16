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
exports.Profile = void 0;
require("reflect-metadata");
const graphql_1 = require("@nestjs/graphql");
const user_1 = require("./user");
let Profile = class Profile {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], Profile.prototype, "bio", void 0);
__decorate([
    graphql_1.Field((type) => user_1.User, { nullable: true }),
    __metadata("design:type", user_1.User)
], Profile.prototype, "author", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Profile.prototype, "userId", void 0);
Profile = __decorate([
    graphql_1.ObjectType()
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=Profile.js.map