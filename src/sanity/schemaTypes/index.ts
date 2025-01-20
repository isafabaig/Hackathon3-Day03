import { type SchemaTypeDefinition } from "sanity";

import car from "./cars";
import cars from "./cars";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [ cars],
}