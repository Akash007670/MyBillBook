import React, { useState } from "react";
import {
  FormTableWrapper,
  ItemFormWrapper,
  ItemPageWrapper,
  Logout,
  NavWrapper,
  PhoneNumber,
} from "./ItemElement";
import { useHistory } from "react-router-dom";
import FormElement from "./FormElement";

const Items = () => {
  const [logout, setLogout] = useState(false);
  const history = useHistory();
  let phoneNumber = sessionStorage.getItem("phone");

  const logOutHandler = () => {
    setLogout(true);
    history.push("/");
    alert("Logout succesfully");
    sessionStorage.removeItem("phone");
  };

  return (
    <>
      <ItemPageWrapper>
        <NavWrapper>
          <PhoneNumber>
            {phoneNumber ? phoneNumber : "Please Login"}
          </PhoneNumber>
          <Logout onClick={logOutHandler} value={logout}>
            Logout
          </Logout>
        </NavWrapper>
        <ItemFormWrapper>
          <FormTableWrapper></FormTableWrapper>
          <FormElement />
        </ItemFormWrapper>
      </ItemPageWrapper>
    </>
  );
};

export default Items;
