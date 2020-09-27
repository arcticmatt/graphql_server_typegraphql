import Human from "../schema/Human";
import { humanData } from "./Data";

/**
 * Allows us to query for the human with the given id.
 */
export default function getHuman(id: string): Human | null {
  return new Human(humanData[id]);
}
