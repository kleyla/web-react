import React from "react";
import Pricing from "../../Pricing";
import HeroSection from "./../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Products() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
