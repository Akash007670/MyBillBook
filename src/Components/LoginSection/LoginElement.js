import styled from "styled-components";

export const LoginSectionWrapper = styled.div`
  display: flex;
  height: 60vh;
  max-width: 1600px;
  width: 100%;
  /* border: 2px solid red; */
  padding: 0 4rem;
  align-items: center;
  background-color: rgb(247 242 237);
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    /* background-color: red; */
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    /* background-color: red; */
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  position: relative;
  /* border: 2px solid green; */
  height: 100%;
  width: 55%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
`;

export const HeroText = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  margin-top: -7rem;
  /* border: 2px solid red; */
  flex-direction: column;
  justify-content: space-around;
`;

export const Heading = styled.h2`
  display: flex;
  /* border: 2px solid blue; */
  font-size: 25px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }
`;
export const Heading2 = styled.p`
  display: flex;
  /* border: 2px solid black; */
  font-size: 22px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }
`;
export const Heading3 = styled.p`
  display: flex;
  font-size: 18px;
  /* border: 2px solid brown; */
  margin-top: 10px;
  color: #0c0c0cb5;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    /* background-color: red; */
  }
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  position: absolute;
  /* border: 2px solid purple; */
  bottom: 10px;
  width: 100%;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    /* background-color: red; */
  }
`;

//Login part starts here ///

export const LoginFormWrapper = styled.div`
  display: flex;
  border: 2px solid rgb(243 233 224);
  flex-direction: column;
  align-items: center;
  height: 95%;
  width: 30%;
  background-color: white;
  /* border: 2px solid red; */
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 1px 2px 15px rgb(243, 233, 224);
  @media screen and (max-width: 1024px) {
    /* background-color: red; */
    width: 35%;
  }
  @media screen and (max-width: 768px) {
    /* background-color: red; */
    width: 50%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 100%;
  width: "100%";
  /* border: 2px solid green; */
  margin-top: 1rem;
  flex-direction: column;
  justify-content: ${({ gotOtp }) => (gotOtp ? "space-between" : "")};
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  /*  */
  margin-top: 1rem;
  height: 10%;
  width: 100%;
`;

export const Span = styled.p`
  display: flex;
  /* border: 2px solid blue; */
  color: silver;
  font-size: 15px;
`;

export const InputAddon = styled.div`
  display: flex;
  background-color: rgb(199 196 196);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: white;
  text-align: center;
  height: 100%;
  width: 10%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-right: 1px solid rgb(199, 196, 196);
  border-left: 1px solid grey;
`;

export const PhoneInput = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
  border-left: 1px solid rgb(199, 196, 196);
  &::placeholder {
    font-size: 14px;
  }
`;

export const OtpInput = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
  border-left: 1px solid rgb(199, 196, 196);
  margin-top: 1rem;
  margin-bottom: 1rem;
  &::placeholder {
    font-size: 14px;
  }
`;

export const OtpInputWrapper = styled.div`
  display: flex;
  /*  */
  margin-top: 1rem;
  height: 30%;
  width: 100%;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(176 188 201);
  cursor: pointer;
  outline: none;
  font-size: 18px;
  border: none;
  background-color: ${({ hasPhoneNumber }) =>
    hasPhoneNumber ? "rgb(104 126 150)" : "rgb(152 165 179)"};
  width: 100%;
  height: 13%;
  border-radius: 8px;
  margin-top: 2rem;
`;

export const ErrorText = styled.p`
  display: flex;
  color: red;
`;
