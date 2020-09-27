"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const starWarsSchema_1 = __importDefault(require("./schema/starWarsSchema"));
async function main() {
    const schema = await starWarsSchema_1.default();
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new apollo_server_1.ApolloServer({ schema });
    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}
main();
