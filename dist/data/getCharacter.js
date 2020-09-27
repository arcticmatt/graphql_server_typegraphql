"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
const Droid_1 = __importDefault(require("../schema/Droid"));
const Human_1 = __importDefault(require("../schema/Human"));
/**
 * Helper function to get a character by ID.
 */
function getCharacter(id) {
    if (Data_1.humanData[id]) {
        return new Human_1.default(Data_1.humanData[id]);
    }
    else if (Data_1.droidData[id]) {
        return new Droid_1.default(Data_1.droidData[id]);
    }
    return null;
}
exports.default = getCharacter;
