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

const TableElement = ({ data, setFormData }) => {
  const [search, setSearch] = useState("");
  const keys = data.length > 0 ? Object.keys(data[0]) : "";

  const updateHandler = (obj) => {
    setFormData(obj);
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
              {data.length > 0 &&
                data.map((obj, index) => (
                  <TBodyRow key={index} onClick={() => updateHandler(obj)}>
                    {keys.slice(0, 6).map((item, index) => (
                      <Td key={index}>{obj[item]}</Td>
                    ))}
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
