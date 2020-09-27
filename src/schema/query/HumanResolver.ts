import { Arg, Query, Resolver } from "type-graphql";
import getHuman from "../../data/getHuman";
import Human from "../Human";

@Resolver()
export class HumanResolver {
  @Query(() => Human, { nullable: true })
  human(
    @Arg("id", {
      description: "id of the human",
    })
    id: string
  ): Human | null {
    return getHuman(id);
  }
}
