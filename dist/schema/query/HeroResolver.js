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
exports.HeroResolver = void 0;
const type_graphql_1 = require("type-graphql");
const getHero_1 = __importDefault(require("../../data/getHero"));
const Character_1 = __importDefault(require("../Character"));
const Episode_1 = __importDefault(require("../Episode"));
let HeroResolver = class HeroResolver {
    hero(episode) {
        const hero = getHero_1.default(episode);
        return hero;
    }
};
__decorate([
    type_graphql_1.Query(() => Character_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("episode", () => Episode_1.default, {
        nullable: true,
        description: "If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.",
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Character_1.default)
], HeroResolver.prototype, "hero", null);
HeroResolver = __decorate([
    type_graphql_1.Resolver()
], HeroResolver);
exports.HeroResolver = HeroResolver;
