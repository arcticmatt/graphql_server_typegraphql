import { Field, InterfaceType, Root } from "type-graphql";
import getFriends from "../data/getFriends";
import Episode from "./Episode";

@InterfaceType({
  description: "A character in the Star Wars Trilogy",
  resolveType: (value) => value.constructor.name,
})
abstract class Character {
  @Field({ description: "The id of the character." })
  id!: string;

  @Field({ description: "The name of the character.", nullable: true })
  name!: string;

  @Field(() => [Character], {
    description:
      "The friends of the character, or an empty list if they have none.",
    nullable: "itemsAndList",
  })
  friends(@Root() character: Character): Array<Character | null> {
    // Need to provide an implementation in order to decorate it.
    return getFriends(character);
  }

  friendIds!: string[];

  @Field(() => [Episode], {
    description: "Which movies they appear in.",
    nullable: "itemsAndList",
  })
  appearsIn!: Episode[];

  @Field({ description: "All secrets about their past.", nullable: true })
  secretBackstory(): string {
    throw new Error("secretBackstory is secret.");
  }
}

export default Character;
