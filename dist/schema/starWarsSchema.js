"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DroidResolver_1 = require("./query/DroidResolver");
const HeroResolver_1 = require("./query/HeroResolver");
const HumanOrDroidResolver_1 = require("./query/HumanOrDroidResolver");
const HumanResolver_1 = require("./query/HumanResolver");
const type_graphql_1 = require("type-graphql");
async function getSchema() {
    return type_graphql_1.buildSchema({
        resolvers: [
            DroidResolver_1.DroidResolver,
            HeroResolver_1.HeroResolver,
            HumanResolver_1.HumanResolver,
            HumanOrDroidResolver_1.HumanOrDroidResolver,
        ],
        // See https://github.com/MichalLytek/type-graphql/issues/150
        validate: false,
    });
}
exports.default = getSchema;
