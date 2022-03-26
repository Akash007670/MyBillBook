import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  const [getFormData, setGetFormtData] = useState([]);
  const [formData, setFormData] = useState({
    itemName: "",
    itemCode: "",
    salesPrice: "",
    purchasePrice: "",
    measuringUnit: "",
    openingDate: "",
  });
  const history = useHistory();
  let phoneNumber = sessionStorage.getItem("phone");

  const logOutHandler = () => {
    setLogout(true);
    history.push("/");
    alert("Logout succesfully");
    sessionStorage.removeItem("phone");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setGetFormtData((prevState) => [
      ...prevState,
      { ...formData, _id: uuidv4() },
    ]);
    setFormData({
      itemName: "",
      itemCode: "",
      salesPrice: "",
      purchasePrice: "",
      measuringUnit: "",
      openingDate: "",
    });
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
          <TableElement
            data={getFormData}
            formData={formData}
            setFormData={setFormData}
          />
          <FormElement
            setGetFormtData={setGetFormtData}
            formSubmitHandler={formSubmitHandler}
            setFormData={setFormData}
            formData={formData}
          />
        </ItemFormWrapper>
      </ItemPageWrapper>
    </>
  );
};

export default Items;
