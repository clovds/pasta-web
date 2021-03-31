import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pasta @widowicaksono</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/clovds"
                target="_blank"
                aria-label="github"
                rel="noopener"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="http://instagram.com/widowicaksono"
                target="_blank"
                aria-label="instagram"
                rel="noopener"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/widowicaksono"
                target="_blank"
                aria-label="twitter"
                rel="noopener"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/widowicaksono/"
                target="_blank"
                aria-label="linkedin"
                rel="noopener"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
