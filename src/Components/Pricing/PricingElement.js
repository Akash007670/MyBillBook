import styled from "styled-components";

export const PricingElementWrapper = styled.div`
  display: flex;
  /* border: 2px solid red; */
  height: 65vh;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  flex-direction: column;
`;

export const PricingTitleWrapper = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  width: 100%;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  /* border: 2px solid red; */
  margin-left: 2.5rem;
  flex-direction: column;
`;

export const PricingTitle = styled.h2`
  display: flex;
  font-size: 40px;
  font-weight: 600;
`;
export const PricingSubTitle = styled.p`
  display: flex;
  font-size: 35px;
  color: orange;
  font-weight: 600;
`;

export const MoneyBackWrapper = styled.div`
  display: flex;
  margin-right: 2.5rem;
`;

//Price Container Starts here //

export const PriceContainer = styled.div`
  display: flex;
  /* border: 2px solid brown; */
  width: 100%;
  height: 85vh;
  justify-content: space-between;
`;
export const Container = styled.div`
  display: flex;
  height: 90%;
  width: 28%;
  margin: 2rem auto;
  border: 2px solid rgb(213 211 211);
  border-radius: 8px;
  flex-direction: column;
  cursor: pointer;
  /* padding: 0 1rem; */
  &:nth-child(2) {
    background-color: rgb(251 246 237);
    border: 2px solid rgb(239 215 178);
  }
`;

export const IconWrapper = styled.div`
  /* border: 2px solid red; */
  height: 10%;
  svg {
    height: 40px;
    width: 40px;
  }
`;

export const PriceTitle = styled.div`
  display: flex;
  font-size: 25px;
  margin-top: 10px;
  font-weight: bold;
  /* border: 2px solid green; */
`;

export const Prices = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
`;
export const Price = styled.p`
  display: flex;
  text-decoration: line-through;
  font-size: 15px;
`;
export const RealPrice = styled.p`
  display: flex;
  margin-left: 10px;
  font-size: 30px;
  font-weight: 500;
  color: rgb(123 138 197);
`;
export const RealPriceGold = styled.p`
  display: flex;
  margin-left: 10px;
  font-size: 30px;
  font-weight: 500;
  color: rgb(222 174 98);
`;
export const RealPriceDiamond = styled.p`
  display: flex;
  margin-left: 10px;
  font-size: 30px;
  font-weight: 500;
  color: rgb(222 121 58);
`;

export const MobileDesktopDiv = styled.div`
  display: flex;
  height: 14%;
  /* border: 2px solid yellow; */
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  background-color: rgb(237 239 247);
`;
export const MobileDesktopDiv2 = styled.div`
  display: flex;
  height: 14%;
  /* border: 2px solid yellow; */
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  background-color: rgb(248 233 211);
`;
export const MobileDesktopDiv3 = styled.div`
  display: flex;
  height: 14%;
  /* border: 2px solid yellow; */
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  background-color: rgb(251 239 232);
`;

export const Title2 = styled.p`
  display: flex;
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
  color: rgb(102 120 188);
`;
export const Title3 = styled.p`
  display: flex;
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
  color: rgb(222 174 98);
`;
export const Title4 = styled.p`
  display: flex;
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
  color: rgb(222 121 58);
`;

export const DescriptionDiv = styled.div`
  display: flex;
  /* border: 2px solid green; */
  height: 45%;
  flex-direction: column;
  /* justify-content: space-around; */
`;

export const DescriptionList = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  text-align: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const DescriptionItems = styled.p`
  display: flex;
  font-size: 16px;
  color: grey;
  margin-left: 1rem;
`;
