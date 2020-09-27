"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Human_1 = __importDefault(require("../schema/Human"));
const Data_1 = require("./Data");
/**
 * Allows us to query for the human with the given id.
 */
function getHuman(id) {
    return new Human_1.default(Data_1.humanData[id]);
}
exports.default = getHuman;
