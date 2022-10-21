import React, { useEffect, useState } from "react";

import {
  ItemFormWrapper,
  ItemPageWrapper,
  Logout,
  NavWrapper,
  PhoneNumber,
  FormTableWrapper,
  Icon,
  Input,
  Table,
  TableDataWrapper,
  TableSearchbar,
  TableTitle,
  Tbody,
  TBodyRow,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Form,
  FormWrapper,
  ItemNameWrapper,
  Select,
  Submit,
  Text1,
  Text2,
  TtileWrapper,
  NotFound,
  NotFoundTitle,
} from "./ItemElement";
import { useHistory } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icn_search 1.svg";
import { ReactComponent as NotFoundIcon } from "../../assets/icn_Inventory Reports.svg";

const Items = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemCode: "",
    salesPrice: "",
    purchasePrice: "",
    measuringUnit: "",
    openingDate: "",
  });
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [logout, setLogout] = useState(false);
  const history = useHistory();
  let phoneNumber = window.localStorage.getItem("PHONE_NO");

  const logOutHandler = () => {
    setLogout(true);
    history.push("/");
    alert("Logout succesfully");
    window.localStorage.removeItem("PHONE_NO");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let {
      itemName,
      itemCode,
      salesPrice,
      purchasePrice,
      measuringUnit,
      openingDate,
    } = formData;
    if (
      itemName &&
      itemCode &&
      salesPrice &&
      purchasePrice &&
      measuringUnit &&
      openingDate
    ) {
      setData((prev) => [
        ...prev,
        { ...formData, id: Math.floor(Math.random() * 1000) },
      ]);
      setFormData({
        itemName: "",
        itemCode: "",
        salesPrice: "",
        purchasePrice: "",
        measuringUnit: "",
        openingDate: "",
      });
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("FORM_DATA") === null) {
      window.localStorage.setItem("FORM_DATA", JSON.stringify([]));
    } else {
      const getTotalData = JSON.parse(window.localStorage.getItem("FORM_DATA"));
      setData(getTotalData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("FORM_DATA", JSON.stringify(data));
  }, [data]);

  const keys = data.length > 0 ? Object.keys(data[0]) : "";

  // const searchHandler = (value) => {
  //   setSearchData(value);
  //   if (value !== "") {
  //     let filterResult = [...getFormData];
  //     filterResult = filterResult.filter((row) => {
  //       const userData = `${Object.values(
  //         `${row.itemName} ${row.itemCode}`
  //       ).join("")}.`;
  //       const el = userData.toLowerCase().trim();
  //       if (el.includes(value.toLowerCase().trim())) {
  //         return true;
  //       }
  //       return false;
  //     });
  //     setGetFormtData(filterResult);
  //   } else {
  //     setGetFormtData(globalFormData);
  //   }
  // };

  const filterResult = data.filter((row) => {
    const userData = `${Object.values(`${row.itemName} ${row.itemCode}`).join(
      ""
    )}.`;
    const el = userData.toLowerCase().trim();
    if (el.includes(searchQuery.toLowerCase().trim())) {
      return true;
    }
    return false;
  });

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
          <FormTableWrapper>
            <TableTitle>Items</TableTitle>
            <TableSearchbar>
              <Icon>
                <SearchIcon />
              </Icon>
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search items"
              />
            </TableSearchbar>
            <TableDataWrapper>
              <Table>
                <Thead>
                  <Tr>
                    <Th>item name</Th>
                    <Th>item code</Th>
                    <Th>sales price</Th>
                    <Th>purchase price</Th>
                    <Th>measurement</Th>
                    <Th>opening date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filterResult.length > 0 ? (
                    <>
                      {filterResult.length > 0 &&
                        filterResult.map((obj, index) => (
                          <TBodyRow key={index}>
                            {keys.slice(0, 6).map((item, index) => (
                              <Td key={index}>{obj[item]}</Td>
                            ))}
                          </TBodyRow>
                        ))}
                    </>
                  ) : (
                    <NotFound>
                      <NotFoundIcon />
                      <NotFoundTitle>
                        You Do not have any items to display
                      </NotFoundTitle>
                    </NotFound>
                  )}
                </Tbody>
              </Table>
            </TableDataWrapper>
          </FormTableWrapper>
          {/* FORM STARTS HERE */}
          <FormWrapper>
            <TtileWrapper>Create/Edit Items</TtileWrapper>
            <Form onSubmit={formSubmitHandler}>
              <Flex>
                <ItemNameWrapper>
                  <Text1>Item Name*</Text1>
                  <Input
                    type="text"
                    placeholder="Enter item name"
                    onChange={(e) =>
                      setFormData({ ...formData, itemName: e.target.value })
                    }
                    value={formData.itemName}
                  />
                  {/* <ErrorText>Enter item name</ErrorText> */}
                </ItemNameWrapper>
                <ItemNameWrapper>
                  <Text1>Item Code</Text1>
                  <Input
                    type="text"
                    placeholder="Enter item code"
                    onChange={(e) =>
                      setFormData({ ...formData, itemCode: e.target.value })
                    }
                    value={formData.itemCode}
                  />
                  {/* <ErrorText>Enter item code</ErrorText> */}
                </ItemNameWrapper>
              </Flex>
              <Flex>
                <Text2>Stocks &#38; Pricing details(Optional)</Text2>
              </Flex>
              <Flex>
                <ItemNameWrapper>
                  <Text1>Sales Price*</Text1>
                  <Input
                    type="number"
                    placeholder="₹ 0"
                    onChange={(e) =>
                      setFormData({ ...formData, salesPrice: e.target.value })
                    }
                    value={formData.salesPrice}
                  />
                  {/* <ErrorText>Enter sales price</ErrorText> */}
                </ItemNameWrapper>
                <ItemNameWrapper>
                  <Text1>Purchase Price</Text1>
                  <Input
                    type="number"
                    placeholder="₹ 0"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        purchasePrice: e.target.value,
                      })
                    }
                    value={formData.purchasePrice}
                  />
                  {/* <ErrorText>Enter purchase price</ErrorText> */}
                </ItemNameWrapper>
              </Flex>
              <Flex>
                <ItemNameWrapper>
                  <Text1>Measuring UNIT</Text1>
                  <Select
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        measuringUnit: e.target.value,
                      })
                    }
                    value={formData.measuringUnit}
                  >
                    <option>Select Value</option>
                    <option value="pcs">pcs</option>
                    <option value="boxes">boxes</option>
                    <option value="gms">gms</option>
                    <option value="kgs">kgs</option>
                    <option value="ltr">ltr</option>
                  </Select>
                </ItemNameWrapper>
                <ItemNameWrapper>
                  <Text1>Opening Stock Date</Text1>
                  <Input
                    type="date"
                    onChange={(e) =>
                      setFormData({ ...formData, openingDate: e.target.value })
                    }
                    value={formData.openingDate}
                  />
                </ItemNameWrapper>
              </Flex>
              <Flex>
                <Submit type="submit" onClick={formSubmitHandler}>
                  Save
                </Submit>
              </Flex>
            </Form>
          </FormWrapper>
        </ItemFormWrapper>
      </ItemPageWrapper>
    </>
  );
};

export default Items;
