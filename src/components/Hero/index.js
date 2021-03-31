import React from "react";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <HeroContainer>
      {/* <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <HeroContent>
        <HeroItems>
          <HeroH1>Delicious Pasta In Town</HeroH1>
          <HeroP>Life’s too short for boring food</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
