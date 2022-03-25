import React from "react";
import {
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
} from "./ItemElement";
import { ReactComponent as SearchIcon } from "../../assets/icn_search 1.svg";

const TableElement = ({ data }) => {
  const keys = Object.keys(data[0]);
  return (
    <>
      <FormTableWrapper>
        <TableTitle>Items</TableTitle>
        <TableSearchbar>
          <Icon>
            <SearchIcon />
          </Icon>
          <Input type="text" placeholder="Search items" />
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
              {data.map((obj, index) => (
                <TBodyRow key={index}>
                  {keys.map((item, index) => {
                    const value = obj[item];
                    return <Td key={index}>{value}</Td>;
                  })}
                </TBodyRow>
              ))}
            </Tbody>
          </Table>
        </TableDataWrapper>
      </FormTableWrapper>
    </>
  );
};

export default TableElement;
