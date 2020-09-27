import Character from "../schema/Character";
import getCharacter from "./getCharacter";

/**
 * Allows us to query for a character's friends.
 */
export default function getFriends(character: Character): Array<Character> {
  return character.friendIds.map((id) => getCharacter(id));
}
