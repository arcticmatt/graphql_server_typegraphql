import Droid from "./Droid";
import Human from "./Human";
import { createUnionType } from "type-graphql";

const HumanOrDroid = createUnionType({
  name: "HumanOrDroid",
  types: () => [Human, Droid] as const,
});

export default HumanOrDroid;
