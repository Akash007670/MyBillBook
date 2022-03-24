import styled from "styled-components";

export const StatisticsWrapper = styled.div`
  display: flex;
  height: 30vh;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  /* border: 2px solid green; */
  justify-content: space-between;
`;

export const Stat = styled.div`
  display: flex;
  height: 100%;
  /* border: 2px solid red; */
  flex-direction: column;
  width: 20%;
  align-items: center;
  justify-content: center;
`;

export const StatText = styled.h2`
  font-size: 40px;
  color: orange;
  cursor: pointer;
`;
export const StatSubText = styled.p`
  display: flex;
  font-size: 20px;
`;
