"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
var Episode;
(function (Episode) {
    Episode[Episode["NEW_HOPE"] = 4] = "NEW_HOPE";
    Episode[Episode["EMPIRE"] = 5] = "EMPIRE";
    Episode[Episode["JEDI"] = 6] = "JEDI";
})(Episode || (Episode = {}));
// LIMITATION: not sure if you can give descriptions to the individual enum values.
type_graphql_1.registerEnumType(Episode, {
    name: "Episode",
    description: "One of the films in the Star Wars Trilogy",
});
exports.default = Episode;
