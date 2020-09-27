import { Arg, Query, Resolver } from "type-graphql";
import getDroid from "../../data/getDroid";
import Droid from "../Droid";

@Resolver()
export class DroidResolver {
  @Query(() => Droid, { nullable: true })
  droid(
    @Arg("id", {
      description: "id of the droid",
    })
    id: string
  ): Droid | null {
    return getDroid(id);
  }
}
