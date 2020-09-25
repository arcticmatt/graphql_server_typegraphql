import {
  Field,
  InterfaceType,
  ObjectType,
  registerEnumType,
  Root,
} from "type-graphql";
import { getFriends } from "./StarWardsData";

export enum Episode {
  NEW_HOPE = 4,
  EMPIRE,
  JEDI,
}

// LIMITATION: not sure if you can give descriptions to the individual enum values.
registerEnumType(Episode, {
  name: "Episode",
  description: "One of the films in the Star Wars Trilogy",
});

@InterfaceType({
  description: "A character in the Star Wars Trilogy",
  resolveType: (value) => value.constructor.name,
})
export abstract class Character {
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

@ObjectType({
  description: "A humanoid creature in the Star Wars universe.",
  implements: Character,
})
export class Human implements Character {
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

@ObjectType({
  description: "A mechanical creature in the Star Wars universe.",
  implements: Character,
})
export class Droid implements Character {
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
