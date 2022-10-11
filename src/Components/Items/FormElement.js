import React from "react";
import {
  ErrorText,
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

const FormElement = ({ setFormData, formData, formSubmitHandler }) => {
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
                  setFormData({ ...formData, purchasePrice: e.target.value })
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
                  setFormData({ ...formData, measuringUnit: e.target.value })
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
              {/* <ErrorText>Enter measuring unit</ErrorText> */}
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
              {/* <ErrorText>Enter date</ErrorText> */}
            </ItemNameWrapper>
          </Flex>
          <Flex>
            <Submit onClick={formSubmitHandler}>Save</Submit>
          </Flex>
        </Form>
      </FormWrapper>
    </>
  );
};

export default FormElement;
