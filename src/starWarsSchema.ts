import {
  DroidResolver,
  HeroResolver,
  HumanOrDroidResolver,
  HumanResolver,
} from "./StarWarsResolvers";

import { GraphQLSchema } from "graphql";
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
