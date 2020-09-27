"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
const Droid_1 = __importDefault(require("../schema/Droid"));
const Human_1 = __importDefault(require("../schema/Human"));
function getHumanOrDroid(input) {
    if ((input.one + input.two + input.three) % 2 === 0) {
        return new Human_1.default(Data_1.humanData[Object.keys(Data_1.humanData)[0]]);
    }
    return new Droid_1.default(Data_1.droidData[Object.keys(Data_1.droidData)[0]]);
}
exports.default = getHumanOrDroid;
