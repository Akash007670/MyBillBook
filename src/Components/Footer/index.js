import React from "react";
import {
  Btn1,
  Btn2,
  ButtonWrapper,
  Email,
  FollowUsSection,
  FooterElementWrapper,
  FooterListItems,
  FooterListItemWrapper1,
  FooterListItemWrapper2,
  FooterListWrapper,
  GetInTouchSection,
  InformationSection,
  Links,
  LinksWrapper,
  PhoneNumber,
  Title,
  Title2,
} from "./FooterElement";

import { ReactComponent as WhatsAppIcon } from "../../assets/icn_whatsapp.svg";
import { ReactComponent as ChatIcon } from "../../assets/icn_chat with us.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icn_instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icn_youtube.svg";
import { ReactComponent as FaceBookIcon } from "../../assets/icn_Facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icn_Twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icn_linkedin.svg";

const Footer = () => {
  return (
    <FooterElementWrapper>
      <GetInTouchSection>
        <Title>Get in touch</Title>
        <Email>help@flobiz.in</Email>
        <PhoneNumber>+91 74004 17400</PhoneNumber>
        <ButtonWrapper>
          <Btn1>
            <WhatsAppIcon />
            WhatsApp us
          </Btn1>
          <Btn2>
            <ChatIcon />
            Chat with us
          </Btn2>
        </ButtonWrapper>
      </GetInTouchSection>
      <InformationSection>
        <Title>Information</Title>
        <FooterListWrapper>
          <FooterListItemWrapper1>
            <FooterListItems>Refund Policy</FooterListItems>
            <FooterListItems>privacy Policy</FooterListItems>
            <FooterListItems>Terms &#38; Conditions</FooterListItems>
          </FooterListItemWrapper1>
          <FooterListItemWrapper2>
            <FooterListItems>FAQ's</FooterListItems>
            <FooterListItems>Pricing</FooterListItems>
            <FooterListItems>Flobiz Business Group</FooterListItems>
            <FooterListItems>Blogs</FooterListItems>
          </FooterListItemWrapper2>
        </FooterListWrapper>
      </InformationSection>
      <FollowUsSection>
        <Title>Follow us</Title>
        <LinksWrapper>
          <Links>
            <YoutubeIcon />
          </Links>
          <Links>
            <InstagramIcon />
          </Links>
          <Links>
            <YoutubeIcon />
          </Links>
          <Links>
            <FaceBookIcon />
          </Links>
          <Links>
            <TwitterIcon />
          </Links>
          <Links>
            <LinkedinIcon />
          </Links>
        </LinksWrapper>
        <Title2>
          FloBooks is a product by <a href="/">Flobiz</a>
        </Title2>
      </FollowUsSection>
    </FooterElementWrapper>
  );
};

export default Footer;
