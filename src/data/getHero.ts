import { artoo, luke } from "./Data";

import Character from "../schema/Character";
import Droid from "../schema/Droid";
import Human from "../schema/Human";

/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
export default function getHero(episode: number | undefined): Character {
  if (episode === 5) {
    // Luke is the hero of Episode V.
    return new Human(luke);
  }
  // Artoo is the hero otherwise.
  return new Droid(artoo);
}
