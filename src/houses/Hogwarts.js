import React from "react";
import Hufflepuff from "../src/houses/Hufflepuff";
import * as GryffFunctions from "../src/houses/Gryffindor";
import { colors, gryffMascot } from "../src/houses/Gryffindor";

export default function Hogwarts() {
  return (
    <div>
      <Hufflepuff />
      {colors}
      {GryffFunctions.gryffMascot()}
    </div>
  );
}
