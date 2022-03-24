import React, { useState } from "react";
import {
  ContentWrapper,
  Heading,
  Heading2,
  Heading3,
  HeroText,
  HeroTextWrapper,
  InputAddon,
  InputWrapper,
  Isowrapper,
  LoginFormWrapper,
  LoginSectionWrapper,
  MadeInLoveWrapper,
  OtpInput,
  OtpInputWrapper,
  Span,
  Button,
  ErrorText,
  PhoneInputWrapper,
  PhoneInput,
} from "./LoginElement";
import IsoLogo from "../../assets/icn_ISO.svg";
import axios from "axios";

const LoginSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [gotOtp, setGotOtp] = useState(false);
  const [enterOtp, setEnterOtp] = useState("");

  const isValidNumber = (phoneNumber) => {
    const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const result = phoneNumber.match(regex);
    if (result) {
      return true;
    }
    return false;
  };

  const getOtpHandler = async () => {
    if (!phoneNumber && !isValidNumber(phoneNumber)) {
      return setError("valid mobile number required!");
    }
    const body = { mobile_number: phoneNumber };
    try {
      const res = await axios.post(
        "https://niobooks.in/api/web/request_otp",
        body
      );
      setGotOtp(true);
      console.log(res);
    } catch {
      console.log("error");
      setGotOtp(false);
    }
  };

  // Here I  need to get otp when my api request works!!!
  const LoginHandler = async (otp) => {
    const body = { mobile_number: phoneNumber, otp_code: enterOtp };
    try {
      const res = await axios.post(
        "https://niobooks.in/api/web/authenticate",
        body
      );
      sessionStorage.setItem("phone", phoneNumber);
    } catch {
      console.log("Error");
    }
    console.log(body);
  };

  return (
    <>
      <LoginSectionWrapper>
        <ContentWrapper>
          <HeroTextWrapper>
            <HeroText>
              <Heading>Simple GST Billing &#38; Stock Management</Heading>
              <Heading2>software for your business</Heading2>
              <Heading3>Atma Nirbhar Vyapaari bane</Heading3>
            </HeroText>
            <MadeInLoveWrapper>
              <Heading3>Made with &#128151; in India</Heading3>
              <Isowrapper>
                <img src={IsoLogo} alt="isologo" />
              </Isowrapper>
            </MadeInLoveWrapper>
          </HeroTextWrapper>
          {/* //Login part starts here // */}
          <LoginFormWrapper>
            <Heading3>Login To myBillBook</Heading3>
            <InputWrapper>
              <Span>Enter the Mobile Number</Span>
              <PhoneInputWrapper>
                <InputAddon>+91</InputAddon>
                <PhoneInput
                  input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </PhoneInputWrapper>
              {getOtpHandler ? <ErrorText>{error}</ErrorText> : ""}
              {gotOtp ? (
                <>
                  <OtpInputWrapper>
                    <Span>Enter OTP</Span>
                    <OtpInput
                      input
                      type="text"
                      placeholder="Enter One Time Password"
                      value={enterOtp}
                      onChange={(e) => setEnterOtp(e.target.value)}
                    />
                    <Span>Resend OTP in 00:00 seconds</Span>
                  </OtpInputWrapper>
                </>
              ) : (
                ""
              )}
              <Button
                onClick={gotOtp ? LoginHandler : getOtpHandler}
                hasPhoneNumber={phoneNumber.length > 9}
              >
                {gotOtp ? "Login" : "GET OTP"}
              </Button>
            </InputWrapper>
          </LoginFormWrapper>
        </ContentWrapper>
      </LoginSectionWrapper>
    </>
  );
};

export default LoginSection;
