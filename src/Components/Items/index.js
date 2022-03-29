import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    itemName: "",
    itemCode: "",
    salesPrice: "",
    purchasePrice: "",
    measuringUnit: "",
    openingDate: "",
  });
  const [logout, setLogout] = useState(false);
  const [getFormData, setGetFormtData] = useState([]);
  const [globalFormData, setGlobalFormData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(false);
  const history = useHistory();
  let phoneNumber = sessionStorage.getItem("phone");
  localStorage.setItem("data", JSON.stringify(globalFormData));
  // let getGlobalFormData = localStorage.getItem("data");

  // console.log(edit);

  const errorHandler = () => {
    if (formData.itemName === "") {
      setError("Enter Item Name");
    } else if (formData.itemCode === "") {
      setError("Enter item code");
    } else if (formData.salesPrice === "") {
      setError("Enter sales price");
    } else if (formData.purchasePrice === "") {
      setError("Enter purchase price");
    } else if (formData.measuringUnit === "") {
      setError("Select measuring unit");
    } else if (formData.openingDate === "") {
      setError("Select date");
    }
  };

  const logOutHandler = () => {
    setLogout(true);
    history.push("/");
    alert("Logout succesfully");
    sessionStorage.removeItem("phone");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    errorHandler();
    if (error && !edit) {
      alert("Enter details");
    } else {
      setGetFormtData((prevState) => [
        ...prevState,
        { ...formData, _id: uuidv4() },
      ]);
      setGlobalFormData((prevState) => [
        ...prevState,
        { ...formData, _id: uuidv4() },
      ]);
      setEdit(false);
      setFormData({
        itemName: "",
        itemCode: "",
        salesPrice: "",
        purchasePrice: "",
        measuringUnit: "",
        openingDate: "",
      });
      if (edit) {
        let hasId = formData.hasOwnProperty("_id");
        if (hasId) {
          alert("Editing values");
        }
      }
    }
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
          `${row.itemName} ${row.itemCode}`
        ).join("")}.`;
        const el = userData.toLowerCase().trim();
        if (el.includes(value.toLowerCase().trim())) {
          return true;
        }
        return false;
      });
      setGetFormtData(filterResult);
    } else {
      setGetFormtData(globalFormData);
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
            globalData={globalFormData}
            error={error}
            editForm={setEdit}
          />
          <FormElement
            setGetFormtData={setGetFormtData}
            formSubmitHandler={formSubmitHandler}
            setFormData={setFormData}
            formData={formData}
            error={error}
            edit={edit}
          />
        </ItemFormWrapper>
      </ItemPageWrapper>
    </>
  );
};

export default Items;
