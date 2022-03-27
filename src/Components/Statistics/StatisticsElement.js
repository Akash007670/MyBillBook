import styled from "styled-components";

export const StatisticsWrapper = styled.div`
  display: flex;
  height: 30vh;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  justify-content: space-between;
  @media screen and (max-width: 968px) {
    padding: 1.5rem;
  }
`;

export const Stat = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 20%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 968px) {
    width: 23%;
  }
`;

export const StatText = styled.h2`
  font-size: 40px;
  color: orange;
  cursor: pointer;
  @media screen and (max-width: 968px) {
    font-size: 35px;
  }
`;
export const StatSubText = styled.p`
  display: flex;
  font-size: 20px;
  @media screen and (max-width: 968px) {
    font-size: 16px;
  }
`;
