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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Character_1;
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const getFriends_1 = __importDefault(require("../data/getFriends"));
const Episode_1 = __importDefault(require("./Episode"));
let Character = Character_1 = class Character {
    friends(character) {
        // Need to provide an implementation in order to decorate it.
        return getFriends_1.default(character);
    }
    secretBackstory() {
        throw new Error("secretBackstory is secret.");
    }
};
__decorate([
    type_graphql_1.Field({ description: "The id of the character." }),
    __metadata("design:type", String)
], Character.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ description: "The name of the character.", nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => [Character_1], {
        description: "The friends of the character, or an empty list if they have none.",
        nullable: "itemsAndList",
    }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Character]),
    __metadata("design:returntype", Array)
], Character.prototype, "friends", null);
__decorate([
    type_graphql_1.Field(() => [Episode_1.default], {
        description: "Which movies they appear in.",
        nullable: "itemsAndList",
    }),
    __metadata("design:type", Array)
], Character.prototype, "appearsIn", void 0);
__decorate([
    type_graphql_1.Field({ description: "All secrets about their past.", nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Character.prototype, "secretBackstory", null);
Character = Character_1 = __decorate([
    type_graphql_1.InterfaceType({
        description: "A character in the Star Wars Trilogy",
        resolveType: (value) => value.constructor.name,
    })
], Character);
exports.default = Character;
