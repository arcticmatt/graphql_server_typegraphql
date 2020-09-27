import { droidData, humanData } from "./Data";

import Character from "../schema/Character";
import Droid from "../schema/Droid";
import Human from "../schema/Human";

/**
 * Helper function to get a character by ID.
 */
export default function getCharacter(id: string): Character {
  if (humanData[id]) {
    return new Human(humanData[id]);
  }
  return new Droid(droidData[id]);
}
