import React, { useEffect, useState } from "react";
import {
  ItemFormWrapper,
  ItemPageWrapper,
  Logout,
  NavWrapper,
  PhoneNumber,
} from "./ItemElement";
import { useHistory } from "react-router-dom";
import FormElement from "./FormElement";
import TableElement from "./TableElement";

const Items = () => {
  const [logout, setLogout] = useState(false);
  const [getFormData, seGetFormtData] = useState([]);
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
          <PhoneNumber>{phoneNumber}</PhoneNumber>
          <Logout onClick={logOutHandler} value={logout}>
            Logout
          </Logout>
        </NavWrapper>
        <ItemFormWrapper>
          {getFormData.length === 0 ? (
            <TableElement data={getFormData} />
          ) : (
            <TableElement data={getFormData} />
          )}
          <FormElement setGetFormtData={seGetFormtData} />
        </ItemFormWrapper>
      </ItemPageWrapper>
    </>
  );
};

export default Items;
