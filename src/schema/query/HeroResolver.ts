import { Arg, Query, Resolver } from "type-graphql";
import getHero from "../../data/getHero";
import Character from "../Character";
import Episode from "../Episode";

@Resolver()
export class HeroResolver {
  @Query(() => Character, { nullable: true })
  hero(
    @Arg("episode", () => Episode, {
      nullable: true,
      description:
        "If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.",
    })
    episode?: Episode
  ): Character {
    const hero = getHero(episode);
    return hero;
  }
}
