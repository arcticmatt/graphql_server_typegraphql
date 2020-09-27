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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const getFriends_1 = __importDefault(require("../data/getFriends"));
const Character_1 = __importDefault(require("./Character"));
const Episode_1 = __importDefault(require("./Episode"));
let Droid = class Droid {
    constructor(data) {
        // TypeGraphQL constructs with no args, so we need this.
        if (!data) {
            return;
        }
        this.id = data.id;
        this.name = data.name;
        this.appearsIn = data.appearsIn;
        this.friendIds = data.friendIds;
        this.primaryFunction = data.primaryFunction;
    }
    friends(character) {
        return getFriends_1.default(character);
    }
    secretBackstory() {
        throw new Error("secretBackstory is secret.");
    }
};
__decorate([
    type_graphql_1.Field({ description: "The id of the droid." }),
    __metadata("design:type", String)
], Droid.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ description: "The name of the droid.", nullable: true }),
    __metadata("design:type", String)
], Droid.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => [Character_1.default], {
        description: "The friends of the droid, or any empty list if they have none.",
        nullable: "itemsAndList",
    }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Character_1.default]),
    __metadata("design:returntype", Array)
], Droid.prototype, "friends", null);
__decorate([
    type_graphql_1.Field(() => [Episode_1.default], {
        description: "Which movies they appear in.",
        nullable: "itemsAndList",
    }),
    __metadata("design:type", Array)
], Droid.prototype, "appearsIn", void 0);
__decorate([
    type_graphql_1.Field({
        description: "Construction date and the name of the designer",
        nullable: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Droid.prototype, "secretBackstory", null);
__decorate([
    type_graphql_1.Field({
        description: "The primary function of the droid.",
    }),
    __metadata("design:type", String)
], Droid.prototype, "primaryFunction", void 0);
Droid = __decorate([
    type_graphql_1.ObjectType({
        description: "A mechanical creature in the Star Wars universe.",
        implements: Character_1.default,
    }),
    __metadata("design:paramtypes", [Object])
], Droid);
exports.default = Droid;
