import { registerEnumType } from "type-graphql";

enum Episode {
  NEW_HOPE = 4,
  EMPIRE,
  JEDI,
}

// LIMITATION: not sure if you can give descriptions to the individual enum values.
registerEnumType(Episode, {
  name: "Episode",
  description: "One of the films in the Star Wars Trilogy",
});

export default Episode;
