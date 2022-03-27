import styled from "styled-components";

export const FooterElementWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  height: 30vh;
  padding: 1.5rem;
  justify-content: space-between;
  @media screen and (max-width: 968px) {
    height: 35vh;
    padding: 0;
    justify-content: space-around;
  }
`;

export const Title = styled.h2`
  display: flex;
  font-size: 20px;
  color: orange;
  text-align: center;
`;

export const GetInTouchSection = styled.div`
  display: flex;

  height: 100%;
  width: 30%;
  flex-direction: column;
  padding: 0 1rem;
  /* justify-content: space-around; */
  @media screen and (max-width: 968px) {
  }
`;

export const Email = styled.p`
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 10px;
`;
export const PhoneNumber = styled.p`
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 10px;
  @media screen and (max-width: 968px) {
    font-size: 1.5rem;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  height: 20%;
  @media screen and (max-width: 968px) {
    flex-direction: column;
    height: 50%;
  }
`;
export const Btn1 = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  width: 45%;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 700;
  color: rgb(61 160 149);
  background-color: rgb(231 243 242);
  cursor: pointer;
  border-radius: 8px;
  border: none;
  outline: none;
  @media screen and (max-width: 968px) {
    width: 60%;
    height: 35%;
  }
`;
export const Btn2 = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  width: 45%;
  justify-content: space-around;
  margin-left: 1rem;
  font-size: 16px;
  font-weight: 700;
  color: rgb(100 158 255);
  background-color: rgb(233 241 255);
  cursor: pointer;
  border-radius: 8px;
  border: none;
  outline: none;
  @media screen and (max-width: 968px) {
    width: 60%;
    height: 35%;
    margin: 1rem 0;
  }
`;

export const InformationSection = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: space-around;
`;

export const FooterListWrapper = styled.div`
  display: flex;
  /* border: 2px solid green; */
  width: 100%;
  height: 100%;
`;
export const FooterListItemWrapper1 = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  width: 50%;
  height: 100%;
  flex-direction: column;
  /* justify-content: space-around; */
`;
export const FooterListItemWrapper2 = styled.div`
  display: flex;
  /* border: 2px solid green; */
  width: 50%;
  height: 100%;
  flex-direction: column;
  /* justify-content: space-around; */
`;

export const FooterListItems = styled.li`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    color: orange;
  }
  /* border: 2px solid blue; */
`;

export const FollowUsSection = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  flex-direction: column;
  padding: 0 1rem;
  @media screen and (max-width: 968px) {
    padding: 0;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid green; */
  margin-top: 1rem;
`;

export const Links = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Title2 = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 600;
`;
