import React from "react";
import {
  FormTableWrapper,
  Icon,
  Input,
  NotFound,
  NotFoundTitle,
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
} from "./ItemElement";
import { ReactComponent as SearchIcon } from "../../assets/icn_search 1.svg";
import { ReactComponent as NotFoundIcon } from "../../assets/icn_Inventory Reports.svg";

const TableElement = ({ data, setFormData, value, searchHandler }) => {
  const keys = data.length > 0 ? Object.keys(data[0]) : "";

  const updateHandler = (obj) => {
    setFormData(obj);
    console.log(obj);
  };

  return (
    <>
      <FormTableWrapper>
        <TableTitle>Items</TableTitle>
        <TableSearchbar>
          <Icon>
            <SearchIcon />
          </Icon>
          <Input
            type="text"
            placeholder="Search items"
            value={value}
            onChange={(e) => searchHandler(e.target.value)}
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
              {data.length > 0 ? (
                <>
                  {data.length > 0 &&
                    data.map((obj, index) => (
                      <TBodyRow key={index} onClick={() => updateHandler(obj)}>
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
    </>
  );
};

export default TableElement;
