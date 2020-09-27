import Droid from "../schema/Droid";
import { droidData } from "./Data";

/**
 * Allows us to query for the droid with the given id.
 */
export default function getDroid(id: string): Droid | null {
  return new Droid(droidData[id]);
}
