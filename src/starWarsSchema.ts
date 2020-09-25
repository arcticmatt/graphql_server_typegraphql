import {
  DroidResolver,
  HeroResolver,
  HumanResolver,
} from "./StarWarsResolvers";

import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";

export default async function getSchema(): Promise<GraphQLSchema> {
  return buildSchema({
    resolvers: [DroidResolver, HeroResolver, HumanResolver],
  });
}
