import React from "react";
import Pricing from "../../Pricing";
import HeroSection from "./../../HeroSection";
import { homeObjThree } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
