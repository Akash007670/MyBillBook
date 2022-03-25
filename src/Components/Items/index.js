import React, { useState } from "react";
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

const data = [
  {
    itemName: "abc",
    itemCode: "abc",
    salesPrice: "10",
    purchasePrice: "19989",
    measuringUnit: "gms",
    openingDate: "2022-03-26",
  },
  {
    itemName: "dfsd",
    itemCode: "rtrrt",
    salesPrice: "10",
    purchasePrice: "19",
    measuringUnit: "gms",
    openingDate: "2022-03-26",
  },
  {
    itemName: "abc",
    itemCode: "abc",
    salesPrice: "10",
    purchasePrice: "19989",
    measuringUnit: "gms",
    openingDate: "2022-03-26",
  },
  {
    itemName: "abc",
    itemCode: "abc",
    salesPrice: "10",
    purchasePrice: "19989",
    measuringUnit: "gms",
    openingDate: "2022-03-26",
  },
  {
    itemName: "abc",
    itemCode: "abc",
    salesPrice: "10",
    purchasePrice: "19989",
    measuringUnit: "gms",
    openingDate: "2022-03-26",
  },
];

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
          <PhoneNumber>{phoneNumber}</PhoneNumber>
          <Logout onClick={logOutHandler} value={logout}>
            Logout
          </Logout>
        </NavWrapper>
        <ItemFormWrapper>
          <TableElement data={data} />
          <FormElement />
        </ItemFormWrapper>
      </ItemPageWrapper>
    </>
  );
};

export default Items;
