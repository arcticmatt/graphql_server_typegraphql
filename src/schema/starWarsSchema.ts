import { DroidResolver } from "./query/DroidResolver";
import { GraphQLSchema } from "graphql";
import { HeroResolver } from "./query/HeroResolver";
import { HumanOrDroidResolver } from "./query/HumanOrDroidResolver";
import { HumanResolver } from "./query/HumanResolver";
import { buildSchema } from "type-graphql";

export default async function getSchema(): Promise<GraphQLSchema> {
  return buildSchema({
    resolvers: [
      DroidResolver,
      HeroResolver,
      HumanResolver,
      HumanOrDroidResolver,
    ],
    // See https://github.com/MichalLytek/type-graphql/issues/150
    validate: false,
  });
}
