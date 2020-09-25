import { Arg, Query, Resolver } from "type-graphql";
import { getDroid, getHero, getHuman } from "./StarWardsData";
import { Character, Droid, Episode, Human } from "./starWarsTypes";

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
