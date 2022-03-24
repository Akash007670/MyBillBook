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

// {
//   /* <div class="statistics">
//           <div class="stat">
//             <div class="text m-0">60 Lakh+</div>
//             <div class="m-0 sub-text">Businesses Trust us</div>
//           </div>
//           <div class="stat">
//             <div class="text m-0">3 Cr+</div>
//             <div class="m-0 sub-text"></div>
//           </div>
//           <div class="stat">
//             <div class="text m-0">7000+</div>
//             <div class="m-0 sub-text">Cities &amp; Towns in India</div>
//           </div>
//           <div class="stat">
//             <div class="text m-0 d-flex align-items-center">
//               4.7<img src="../../static-assets/images/landing-page/star.webp" alt="star icon" height="32" width="32" class="ml-2" loading="lazy">
//             </div>
//             <div class="m-0 sub-text">Rating on Google Play</div>
//           </div>
//         </div> */
// }
