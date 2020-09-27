import { Arg, Query, Resolver } from "type-graphql";
import getHumanOrDroid from "../../data/getHumanOrDroid";
import Droid from "../Droid";
import Human from "../Human";
import HumanOrDroid from "../HumanOrDroid";
import SumInput from "../SumInput";

@Resolver()
export class HumanOrDroidResolver {
  @Query(() => HumanOrDroid, { nullable: true })
  humanOrDroid(
    @Arg("input", () => SumInput)
    input: SumInput
  ): Human | Droid {
    return getHumanOrDroid(input);
  }
}
