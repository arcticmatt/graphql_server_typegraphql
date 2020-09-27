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
exports.HumanOrDroidResolver = void 0;
const type_graphql_1 = require("type-graphql");
const getHumanOrDroid_1 = __importDefault(require("../../data/getHumanOrDroid"));
const HumanOrDroid_1 = __importDefault(require("../HumanOrDroid"));
const SumInput_1 = __importDefault(require("../SumInput"));
let HumanOrDroidResolver = class HumanOrDroidResolver {
    humanOrDroid(input) {
        return getHumanOrDroid_1.default(input);
    }
};
__decorate([
    type_graphql_1.Query(() => HumanOrDroid_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("input", () => SumInput_1.default)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SumInput_1.default]),
    __metadata("design:returntype", Object)
], HumanOrDroidResolver.prototype, "humanOrDroid", null);
HumanOrDroidResolver = __decorate([
    type_graphql_1.Resolver()
], HumanOrDroidResolver);
exports.HumanOrDroidResolver = HumanOrDroidResolver;
