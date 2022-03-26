import React, { useEffect, useState } from "react";
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
  const [search, setSearch] = useState("");
  console.log(data);
  const keys = Object.keys(data);
  const values = Object.values(data);

  const updateHandler = () => {
    console.log(data);
  };

  return (
    <>
      <FormTableWrapper>
        <TableTitle>Items</TableTitle>
        <TableSearchbar>
          <Icon>
            <SearchIcon
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
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
              <TBodyRow key={keys} onClick={updateHandler}>
                {values.map((item, index) => {
                  return <Td key={index}>{item}</Td>;
                })}
              </TBodyRow>
            </Tbody>
          </Table>
        </TableDataWrapper>
      </FormTableWrapper>
    </>
  );
};

export default TableElement;
