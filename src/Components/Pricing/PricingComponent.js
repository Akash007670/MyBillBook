import {
  Container,
  DescriptionDiv,
  DescriptionItems,
  DescriptionList,
  IconWrapper,
  MobileDesktopDiv,
  MobileDesktopDiv2,
  MobileDesktopDiv3,
  PopularTag,
  Price,
  PriceContainer,
  Prices,
  PriceTitle,
  RealPrice,
  RealPriceDiamond,
  RealPriceGold,
  Title2,
  Title3,
  Title4,
} from "./PricingElement";
import { ReactComponent as CrownIcon } from "../../assets/icn_pricing_crown.svg";
import { ReactComponent as GoldCrownIcon } from "../../assets/icn_pricing_crown-gold.svg";
import { ReactComponent as DiamondCrownIcon } from "../../assets/icn_pricing_crown-diamnod.svg";
import { ReactComponent as DesktopIcon } from "../../assets/icn_devices.svg";
import { ReactComponent as GoldDesktopIcon } from "../../assets/icn_devices-gold.svg";
import { ReactComponent as DiamondDesktopIcon } from "../../assets/icn_devices-diamond.svg";
import { ReactComponent as CheckIcon } from "../../assets/icn_ic_check-fill.svg";
import { ReactComponent as DoubleCheckIcon } from "../../assets/icn_ic_check-double-fill.svg";

const PricingComponent = () => {
  return (
    <>
      <PriceContainer>
        {/* //Silver plan starts here// */}
        <Container>
          <IconWrapper>
            <CrownIcon />
          </IconWrapper>
          <PriceTitle>Silver Plan</PriceTitle>
          <Prices>
            <Price>₹1299</Price>
            <RealPrice>₹ 799 /year</RealPrice>
          </Prices>
          <MobileDesktopDiv>
            <DesktopIcon />
            <Title2>Mobile + Desktop</Title2>
          </MobileDesktopDiv>
          <DescriptionDiv>
            <DescriptionList>
              <CheckIcon />
              <DescriptionItems>Unlimited Stock Adjustments</DescriptionItems>
            </DescriptionList>
            <DescriptionList>
              <CheckIcon />
              <DescriptionItems>
                GST Reports,Profits &#38; Loss Reports
              </DescriptionItems>
            </DescriptionList>
            <DescriptionList>
              <CheckIcon />
              <DescriptionItems>
                Remove myBillBook logo from Invoice
              </DescriptionItems>
            </DescriptionList>
            <DescriptionList>
              <CheckIcon />
              <DescriptionItems>Only Mobile device supported</DescriptionItems>
            </DescriptionList>
            <DescriptionList>
              <CheckIcon />
              <DescriptionItems>+5 more features</DescriptionItems>
            </DescriptionList>
          </DescriptionDiv>
        </Container>

        {/* //Gold Container Starts here // */}

        <Container>
          <PopularTag>Most Popular</PopularTag>
          <IconWrapper>
            <GoldCrownIcon />
          </IconWrapper>
          <PriceTitle>Gold Plan</PriceTitle>
          <Prices>
            <Price>₹2599</Price>
            <RealPriceGold>₹ 1799 /year</RealPriceGold>
          </Prices>
          <MobileDesktopDiv2>
            <GoldDesktopIcon />
            <Title3>Mobile + Desktop</Title3>
          </MobileDesktopDiv2>
          <DescriptionDiv>
            <DescriptionList>
              <DoubleCheckIcon />
              <DescriptionItems>All Silver Features</DescriptionItems>
            </DescriptionList>
            <DescriptionList>
              <CheckIcon />
              <DescriptionItems>
                Add upto 5 staff to myBillBook
              </DescriptionItems>
            </DescriptionList>
            <DescriptionList>
              <CheckIcon />
              <DescriptionItems>
                Unlimited Mobile + Desktop Logins
              </DescriptionItems>
            </DescriptionList>
          </DescriptionDiv>
        </Container>

        {/* //Diamond container starts here// */}

        <Container>
          <IconWrapper>
            <DiamondCrownIcon />
          </IconWrapper>
          <PriceTitle>Diamond Plan</PriceTitle>
          <Prices>
            <Price>₹4599</Price>
            <RealPriceDiamond>₹ 3500 /year</RealPriceDiamond>
          </Prices>
          <MobileDesktopDiv3>
            <DiamondDesktopIcon />
            <Title4>Mobile + Desktop</Title4>
          </MobileDesktopDiv3>
          <DescriptionDiv>
            <DescriptionList>
              <DoubleCheckIcon />
              <DescriptionItems>All Silver and Gold features</DescriptionItems>
            </DescriptionList>
            <DescriptionList>
              <CheckIcon />
              <DescriptionItems>
                Add Unlimited Staff to myBillBook
              </DescriptionItems>
            </DescriptionList>
          </DescriptionDiv>
        </Container>
      </PriceContainer>
    </>
  );
};

export default PricingComponent;
