import { Field, ObjectType, Root } from "type-graphql";
import getFriends from "../data/getFriends";
import Character from "./Character";
import Episode from "./Episode";

@ObjectType({
  description: "A mechanical creature in the Star Wars universe.",
  implements: Character,
})
class Droid implements Character {
  constructor(data?: {
    id: string;
    name: string;
    appearsIn: Episode[];
    friendIds: string[];
    primaryFunction: string;
  }) {
    // TypeGraphQL constructs with no args, so we need this.
    if (!data) {
      return;
    }

    this.id = data.id;
    this.name = data.name;
    this.appearsIn = data.appearsIn;
    this.friendIds = data.friendIds;
    this.primaryFunction = data.primaryFunction;
  }

  @Field({ description: "The id of the droid." })
  id!: string;

  @Field({ description: "The name of the droid.", nullable: true })
  name!: string;

  @Field(() => [Character], {
    description:
      "The friends of the droid, or any empty list if they have none.",
    nullable: "itemsAndList",
  })
  friends(@Root() character: Character): Array<Character | null> {
    return getFriends(character);
  }

  friendIds!: string[];

  @Field(() => [Episode], {
    description: "Which movies they appear in.",
    nullable: "itemsAndList",
  })
  appearsIn!: Episode[];

  @Field({
    description: "Construction date and the name of the designer",
    nullable: true,
  })
  secretBackstory(): string {
    throw new Error("secretBackstory is secret.");
  }

  @Field({
    description: "The primary function of the droid.",
  })
  primaryFunction!: string;
}

export default Droid;
