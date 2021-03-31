import React from "react";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
} from "./HeroMenuElements";

const HeroMenu = ({ title }) => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>{title}</HeroH1>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroMenu;
