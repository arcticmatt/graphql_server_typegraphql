import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import getSchema from "./starWarsSchema";

async function main(): Promise<void> {
  const schema = await getSchema();

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ schema });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();
