"use strict";
/**
 * This defines a basic set of data for our Star Wars Schema.
 *
 * This data is hard coded for the sake of the demo, but you could imagine
 * fetching this data from a backend service rather than from hardcoded
 * JSON objects in a more complex demo.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHumanOrDroid = exports.getDroid = exports.getHuman = exports.getHero = exports.getFriends = void 0;
const Droid_1 = __importDefault(require("./schema/Droid"));
const Human_1 = __importDefault(require("./schema/Human"));
const luke = {
    type: "Human",
    id: "1000",
    name: "Luke Skywalker",
    friendIds: ["1002", "1003", "2000", "2001"],
    appearsIn: [4, 5, 6],
    homePlanet: "Tatooine",
};
const vader = {
    type: "Human",
    id: "1001",
    name: "Darth Vader",
    friendIds: ["1004"],
    appearsIn: [4, 5, 6],
    homePlanet: "Tatooine",
};
const han = {
    type: "Human",
    id: "1002",
    name: "Han Solo",
    friendIds: ["1000", "1003", "2001"],
    appearsIn: [4, 5, 6],
};
const leia = {
    type: "Human",
    id: "1003",
    name: "Leia Organa",
    friendIds: ["1000", "1002", "2000", "2001"],
    appearsIn: [4, 5, 6],
    homePlanet: "Alderaan",
};
const tarkin = {
    type: "Human",
    id: "1004",
    name: "Wilhuff Tarkin",
    friendIds: ["1001"],
    appearsIn: [4],
};
const humanData = {
    [luke.id]: luke,
    [vader.id]: vader,
    [han.id]: han,
    [leia.id]: leia,
    [tarkin.id]: tarkin,
};
const threepio = {
    type: "Droid",
    id: "2000",
    name: "C-3PO",
    friendIds: ["1000", "1002", "1003", "2001"],
    appearsIn: [4, 5, 6],
    primaryFunction: "Protocol",
};
const artoo = {
    type: "Droid",
    id: "2001",
    name: "R2-D2",
    friendIds: ["1000", "1002", "1003"],
    appearsIn: [4, 5, 6],
    primaryFunction: "Astromech",
};
const droidData = {
    [threepio.id]: threepio,
    [artoo.id]: artoo,
};
/**
 * Helper function to get a character by ID.
 */
function getCharacter(id) {
    if (humanData[id]) {
        return new Human_1.default(humanData[id]);
    }
    else if (droidData[id]) {
        return new Droid_1.default(droidData[id]);
    }
    return null;
}
/**
 * Allows us to query for a character's friends.
 */
function getFriends(character) {
    return character.friendIds.map((id) => getCharacter(id));
}
exports.getFriends = getFriends;
/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
function getHero(episode) {
    if (episode === 5) {
        // Luke is the hero of Episode V.
        return new Human_1.default(luke);
    }
    // Artoo is the hero otherwise.
    return new Droid_1.default(artoo);
}
exports.getHero = getHero;
/**
 * Allows us to query for the human with the given id.
 */
function getHuman(id) {
    return new Human_1.default(humanData[id]);
}
exports.getHuman = getHuman;
/**
 * Allows us to query for the droid with the given id.
 */
function getDroid(id) {
    return new Droid_1.default(droidData[id]);
}
exports.getDroid = getDroid;
function getHumanOrDroid(input) {
    if ((input.one + input.two + input.three) % 2 === 0) {
        return new Human_1.default(humanData[Object.keys(humanData)[0]]);
    }
    return new Droid_1.default(droidData[Object.keys(droidData)[0]]);
}
exports.getHumanOrDroid = getHumanOrDroid;
