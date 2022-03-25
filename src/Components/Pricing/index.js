import React from "react";
import {
  MoneyBackWrapper,
  PricingElementWrapper,
  PricingSubTitle,
  PricingTitle,
  PricingTitleWrapper,
  Title,
} from "./PricingElement";
import MoneyBackLogo from "../../assets/icn_moneyback.svg";
import PricingComponent from "./PricingComponent";

const Pricing = () => {
  return (
    <>
      <PricingElementWrapper>
        <PricingTitleWrapper>
          <Title>
            <PricingTitle>Now try all benifits of myBillBook app</PricingTitle>
            <PricingSubTitle>Free for 14 days</PricingSubTitle>
          </Title>
          <MoneyBackWrapper>
            <img src={MoneyBackLogo} alt="money-back-logo" />
          </MoneyBackWrapper>
        </PricingTitleWrapper>
        <PricingComponent />
      </PricingElementWrapper>
    </>
  );
};

export default Pricing;
