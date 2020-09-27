import { Field, ObjectType, Root } from "type-graphql";
import getFriends from "../data/getFriends";
import Character from "./Character";
import Episode from "./Episode";

@ObjectType({
  description: "A humanoid creature in the Star Wars universe.",
  implements: Character,
})
class Human implements Character {
  // LIMITATION: constructors are annoying.
  constructor(data?: {
    id: string;
    name: string;
    appearsIn: Episode[];
    friendIds: string[];
    homePlanet?: string;
  }) {
    // TypeGraphQL constructs with no args, so we need this.
    if (!data) {
      return;
    }

    this.id = data.id;
    this.name = data.name;
    this.appearsIn = data.appearsIn;
    this.friendIds = data.friendIds;
    if (data.homePlanet) {
      this.homePlanet = data.homePlanet;
    }
  }

  @Field({ description: "The id of the human." })
  id!: string;

  @Field({ description: "The name of the human.", nullable: true })
  name!: string;

  @Field(() => [Character], {
    description:
      "The friends of the human, or any empty list if they have none.",
    nullable: "itemsAndList",
  })
  friends(@Root() character: Character): Array<Character> {
    return getFriends(character);
  }

  friendIds!: string[];

  @Field(() => [Episode], {
    description: "Which movies they appear in.",
    nullable: "itemsAndList",
  })
  appearsIn!: Episode[];

  @Field({
    description: "The home planet of the human, or null if unknown.",
    nullable: true,
  })
  homePlanet!: string;

  @Field({
    description: "Where are they from and how they came to be who they are.",
    nullable: true,
  })
  secretBackstory(): string {
    throw new Error("secretBackstory is secret.");
  }
}

export default Human;
