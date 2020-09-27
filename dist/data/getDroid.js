"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Droid_1 = __importDefault(require("../schema/Droid"));
const Data_1 = require("./Data");
/**
 * Allows us to query for the droid with the given id.
 */
function getDroid(id) {
    return new Droid_1.default(Data_1.droidData[id]);
}
exports.default = getDroid;
