import React, { useEffect, useState } from "react";
import {
  Heading,
  Heading2,
  Heading3,
  HeroText,
  HeroTextWrapper,
  LoginFormWrapper,
  LoginSectionWrapper,
  LogoWrapper,
} from "./LoginElement";
import IsoLogo from "../../assets/icn_ISO.svg";
import MadeWithLoveLogo from "../../assets/icn_Made with ❤️ in India.svg";
import { useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { AuthContext } from "../AuthContext";

const LoginSection = () => {
  const usernameRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { login, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (usernameRef.current != null) {
      usernameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!username) {
        setErrMsg("Enter Username");
      }
      if (!password) {
        setErrMsg("Enter Password");
      }
      if (username && password) {
        await login(username, password);
        setUsername("");
        setPassword("");
        navigate("/items");
      }
    } catch (error) {
      setErrMsg("Login Failed");
      errRef.current?.focus();
    }
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
        <div className="form-wrapper">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter Username (admin)"
              value={username}
              ref={usernameRef}
              className="login-input"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password (admin)"
              value={password}
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <button type="submit" className="submit-btn">
              {loading ? (
                <i className="fa fa-spinner fa-pulse fa-1x fa-fw"></i>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </LoginFormWrapper>
    </LoginSectionWrapper>
  );
};

export default LoginSection;
