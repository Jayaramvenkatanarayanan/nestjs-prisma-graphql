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
exports.CreateUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const userPost_input_1 = require("./userPost.input");
const userProfile_input_1 = require("./userProfile.input");
let CreateUserInput = class CreateUserInput {
};
__decorate([
    graphql_1.Field(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field((type) => [userPost_input_1.PostCreateInput], { nullable: true }),
    __metadata("design:type", Array)
], CreateUserInput.prototype, "posts", void 0);
__decorate([
    graphql_1.Field((type) => userProfile_input_1.ProfileCreateInput, { nullable: true }),
    __metadata("design:type", userProfile_input_1.ProfileCreateInput)
], CreateUserInput.prototype, "profile", void 0);
CreateUserInput = __decorate([
    graphql_1.InputType()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
//# sourceMappingURL=createUser.input.js.map