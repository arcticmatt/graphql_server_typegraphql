import "reflect-metadata";

import { Query, Resolver, buildSchema } from "type-graphql";

import { ApolloServer } from "apollo-server";

@Resolver()
export default class TestResolver {
  @Query(() => String)
  async test(): Promise<string> {
    return "hi";
  }
}

async function main(): Promise<void> {
  const schema = await buildSchema({
    resolvers: [TestResolver],
  });

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ schema });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();
