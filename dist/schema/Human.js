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
let Human = class Human {
    // LIMITATION: constructors are annoying.
    constructor(data) {
        // TypeGraphQL constructs with no args, so we need this.
        if (!data) {
            return;
        }
        this.id = data.id;
        this.name = data.name;
        this.appearsIn = data.appearsIn;
        this.friendIds = data.friendIds;
        if (data.homePlanet) {
            this.homePlanet = data.homePlanet;
        }
    }
    friends(character) {
        return getFriends_1.default(character);
    }
    secretBackstory() {
        throw new Error("secretBackstory is secret.");
    }
};
__decorate([
    type_graphql_1.Field({ description: "The id of the human." }),
    __metadata("design:type", String)
], Human.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ description: "The name of the human.", nullable: true }),
    __metadata("design:type", String)
], Human.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => [Character_1.default], {
        description: "The friends of the human, or any empty list if they have none.",
        nullable: "itemsAndList",
    }),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Character_1.default]),
    __metadata("design:returntype", Array)
], Human.prototype, "friends", null);
__decorate([
    type_graphql_1.Field(() => [Episode_1.default], {
        description: "Which movies they appear in.",
        nullable: "itemsAndList",
    }),
    __metadata("design:type", Array)
], Human.prototype, "appearsIn", void 0);
__decorate([
    type_graphql_1.Field({
        description: "The home planet of the human, or null if unknown.",
        nullable: true,
    }),
    __metadata("design:type", String)
], Human.prototype, "homePlanet", void 0);
__decorate([
    type_graphql_1.Field({
        description: "Where are they from and how they came to be who they are.",
        nullable: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Human.prototype, "secretBackstory", null);
Human = __decorate([
    type_graphql_1.ObjectType({
        description: "A humanoid creature in the Star Wars universe.",
        implements: Character_1.default,
    }),
    __metadata("design:paramtypes", [Object])
], Human);
exports.default = Human;
