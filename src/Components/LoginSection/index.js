import React, { useEffect, useState } from "react";
import {
  Heading,
  Heading2,
  Heading3,
  HeroText,
  HeroTextWrapper,
  InputAddon,
  InputWrapper,
  LoginFormWrapper,
  LoginSectionWrapper,
  OtpInput,
  OtpInputWrapper,
  Span,
  Button,
  ErrorText,
  PhoneInputWrapper,
  PhoneInput,
  LogoWrapper,
} from "./LoginElement";
import IsoLogo from "../../assets/icn_ISO.svg";
import MadeWithLoveLogo from "../../assets/icn_Made with ❤️ in India.svg";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [gotOtp, setGotOtp] = useState(false);
  const [enterOtp, setEnterOtp] = useState("");
  const [counter, setCounter] = useState(120);
  const history = useHistory();

  useEffect(() => {
    let timer = null;
    if (gotOtp) {
      timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [gotOtp]);

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
    const body = { mobile_number: phoneNumber, source: "landing" };
    try {
      const res = await axios.post(
        "https://niobooks.in/api/web/request_otp",
        body,
        {
          headers: {
            "content-type": "application/json",
            accept: "application/json",
            client: "web",
          },
        }
      );
      setGotOtp(true);
      window.localStorage.setItem("PHONE_NO", phoneNumber);
      console.log(res);
    } catch {
      console.log("error");
      setGotOtp(false);
    }
  };

  // Here I  need to get otp when my api request works!!!
  const LoginHandler = async () => {
    const body = { mobile_number: phoneNumber, otp_code: enterOtp };
    try {
      const res = await axios.post(
        "https://niobooks.in/api/web/authenticate",
        body
      );
      console.log(res);
      if (res) {
        history.push("/items");
      }
    } catch {
      console.log("Error");
    }
    console.log(body);
  };

  return (
    <LoginSectionWrapper>
      <HeroTextWrapper>
        <HeroText>
          <Heading>Simple GST Billing &#38; Stock Management</Heading>
          <Heading2>software for your business</Heading2>
          <Heading3>Atma Nirbhar Vyapaari bane</Heading3>
        </HeroText>
        <LogoWrapper>
          <img src={MadeWithLoveLogo} alt="made-with-love" />
          <img src={IsoLogo} alt="isologo" />
        </LogoWrapper>
      </HeroTextWrapper>
      {/* //Login part starts here // */}
      <LoginFormWrapper>
        <Heading3>Login To myBillBook</Heading3>
        <InputWrapper>
          <Span>Enter Mobile Number( 6283761945 )</Span>
          <PhoneInputWrapper>
            <InputAddon>+91</InputAddon>
            <PhoneInput
              input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter above number for testing"
            />
          </PhoneInputWrapper>
          {getOtpHandler ? <ErrorText>{error}</ErrorText> : ""}
          {gotOtp ? (
            <>
              <OtpInputWrapper>
                <Span>Enter OTP (12345)</Span>
                <OtpInput
                  input
                  type="text"
                  placeholder="Enter above One Time Password for testing"
                  value={enterOtp}
                  onChange={(e) => setEnterOtp(e.target.value)}
                />
                <Span>Resend OTP in {counter} seconds</Span>
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
    </LoginSectionWrapper>
  );
};

export default LoginSection;
