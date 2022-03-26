import React, { useState } from "react";
import {
  Flex,
  Form,
  FormWrapper,
  Input,
  ItemNameWrapper,
  Select,
  Submit,
  Text1,
  Text2,
  TtileWrapper,
} from "./ItemElement";

const FormElement = ({ setGetFormtData }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemCode: "",
    salesPrice: "",
    purchasePrice: "",
    measuringUnit: "",
    openingDate: "",
  });

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    setGetFormtData(formData);
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
      <FormWrapper>
        <TtileWrapper>Create/Edit Items</TtileWrapper>
        <Form>
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
            </ItemNameWrapper>
            <ItemNameWrapper>
              <Text1>Purchase Price</Text1>
              <Input
                type="number"
                placeholder="₹ 0"
                onChange={(e) =>
                  setFormData({ ...formData, purchasePrice: e.target.value })
                }
                value={formData.purchasePrice}
              />
            </ItemNameWrapper>
          </Flex>
          <Flex>
            <ItemNameWrapper>
              <Text1>Measuring UNIT</Text1>
              <Select
                onChange={(e) =>
                  setFormData({ ...formData, measuringUnit: e.target.value })
                }
                // value={formData.measuringUnit}
              >
                <option>Select Value</option>
                <option>pcs</option>
                <option>boxes</option>
                <option>gms</option>
                <option>kgs</option>
                <option>ltr</option>
              </Select>
            </ItemNameWrapper>
            <ItemNameWrapper>
              <Text1>Opening Stock Date</Text1>
              <Input
                type="date"
                placeholder="Enter item code"
                onChange={(e) =>
                  setFormData({ ...formData, openingDate: e.target.value })
                }
                value={formData.openingDate}
              />
            </ItemNameWrapper>
          </Flex>
          <Flex>
            <Submit onClick={FormSubmitHandler}>Save</Submit>
          </Flex>
        </Form>
      </FormWrapper>
    </>
  );
};

export default FormElement;
