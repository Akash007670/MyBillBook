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
  const [searchData, setSearchData] = useState("");
  const [wholeData, setWholeData] = useState([]);
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

  useEffect(() => {
    setWholeData(getFormData);
  }, [getFormData]);

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

  const searchHandler = (value) => {
    setSearchData(value);
    if (value !== "") {
      let filterResult = [...getFormData];
      filterResult = filterResult.filter((row) => {
        const userData = `${Object.values(
          `${row.itemName}${row.itemCode}`
        ).join("")}.`;
        if (userData.includes(value.toLowerCase().trim())) {
          return true;
        }
        return false;
      });
      setGetFormtData(filterResult);
    } else {
      setGetFormtData(wholeData);
    }
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
            value={searchData}
            searchHandler={searchHandler}
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
