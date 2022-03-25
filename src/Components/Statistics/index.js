import React from "react";
import {
  Stat,
  StatisticsWrapper,
  StatSubText,
  StatText,
} from "./StatisticsElement";
import starIcon from "../../assets/star.webp";

const Statistics = () => {
  return (
    <>
      <StatisticsWrapper>
        <Stat>
          <StatText>1,00,000+</StatText>
          <StatSubText>Businesses Trust us</StatSubText>
        </Stat>
        <Stat>
          <StatText>30,00,000+</StatText>
          <StatSubText>Invoices created</StatSubText>
        </Stat>
        <Stat>
          <StatText>5,000+</StatText>
          <StatSubText>Cities &amp; Towns in India</StatSubText>
        </Stat>
        <Stat>
          <StatText>
            4.5 <img src={starIcon} alt="star" />
          </StatText>
          <StatSubText>Rating on Google Play</StatSubText>
        </Stat>
      </StatisticsWrapper>
    </>
  );
};

export default Statistics;
