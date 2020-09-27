"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
const Droid_1 = __importDefault(require("../schema/Droid"));
const Human_1 = __importDefault(require("../schema/Human"));
/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
function getHero(episode) {
    if (episode === 5) {
        // Luke is the hero of Episode V.
        return new Human_1.default(Data_1.luke);
    }
    // Artoo is the hero otherwise.
    return new Droid_1.default(Data_1.artoo);
}
exports.default = getHero;
