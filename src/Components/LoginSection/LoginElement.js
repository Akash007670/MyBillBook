import styled from "styled-components";

export const LoginSectionWrapper = styled.div`
  display: flex;
  height: 60vh;
  width: 100%;
  background-color: rgb(247 242 237);
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  /* border: 2px solid green; */
  margin: 0 auto;
  justify-content: space-between;
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  /* border: 2px solid red; */
  height: 100%;
  width: 60%;
  justify-content: space-between;
  flex-direction: column;
  /* margin: 0 auto; */
  align-items: center;
`;

export const HeroText = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  margin-top: 8rem;
  /* border: 2px solid green; */
  padding-left: 1.5rem;
  flex-direction: column;
  justify-content: space-around;
`;

export const Heading = styled.h2`
  display: flex;
  /* border: 2px solid red; */
  font-size: 40px;
  font-weight: bold;
  text-align: start;
`;
export const Heading2 = styled.p`
  display: flex;
  margin-top: -2rem;
  font-size: 40px;
  font-weight: 400;
  text-align: start;
`;
export const Heading3 = styled.p`
  display: flex;
  font-size: 20px;
  text-align: start;
  color: #0c0c0cb5;
  font-weight: bold;
`;

export const MadeInLoveWrapper = styled.div`
  display: flex;
  /* border: 2px solid red; */
  width: 93%;
  align-items: center;
`;

export const Isowrapper = styled.div`
  margin-left: 2rem;
`;

//Login part starts here ///

export const LoginFormWrapper = styled.div`
  display: flex;
  border: 2px solid rgb(243 233 224);
  flex-direction: column;
  height: 95%;
  width: 35%;
  margin: 1rem 2.5rem;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 1px 2px 15px rgb(243, 233, 224);
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 100%;
  width: "100%";
  /* border: 2px solid green; */
  margin-top: 1rem;
  flex-direction: column;
  /* justify-content: space-around; */
`;

export const OtpInputWrapper = styled.div`
  display: flex;
  /* border: 2px solid red; */
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

export const OtpInput = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 18px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
  border-left: 1px solid rgb(199, 196, 196);
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
