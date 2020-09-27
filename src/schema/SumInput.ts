import { Field, InputType } from "type-graphql";

@InputType()
class SumInput {
  @Field({ description: "An arbitrary integer." })
  one!: number;

  @Field({ description: "An arbitrary integer." })
  two!: number;

  @Field({ description: "An arbitrary integer." })
  three!: number;
}

export default SumInput;
