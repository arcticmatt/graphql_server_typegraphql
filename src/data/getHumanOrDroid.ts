import { droidData, humanData } from "./Data";

import Droid from "../schema/Droid";
import Human from "../schema/Human";
import SumInput from "../schema/SumInput";

export default function getHumanOrDroid(input: SumInput): Human | Droid {
  if ((input.one + input.two + input.three) % 2 === 0) {
    return new Human(humanData[Object.keys(humanData)[0]]);
  }
  return new Droid(droidData[Object.keys(droidData)[0]]);
}
