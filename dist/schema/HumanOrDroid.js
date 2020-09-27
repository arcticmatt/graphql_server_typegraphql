"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Droid_1 = __importDefault(require("./Droid"));
const Human_1 = __importDefault(require("./Human"));
const type_graphql_1 = require("type-graphql");
const HumanOrDroid = type_graphql_1.createUnionType({
    name: "HumanOrDroid",
    types: () => [Human_1.default, Droid_1.default],
});
exports.default = HumanOrDroid;
