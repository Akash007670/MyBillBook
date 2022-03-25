import styled from "styled-components";

export const ItemPageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  /* border: 2px solid red; */
  flex-direction: column;
`;

export const NavWrapper = styled.div`
  display: flex;
  height: 7%;
  /* border-bottom: 2px solid rgb(225 225 225); */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

export const PhoneNumber = styled.div`
  display: flex;
  /* border: 2px solid red; */
  font-size: 20px;
  font-weight: 600;
`;

export const Logout = styled.button`
  display: flex;
  font-size: 20px;
  width: 6%;
  height: 60%;
  justify-content: center;
  align-items: center;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: white;
`;

export const ItemFormWrapper = styled.div`
  display: flex;
  border: 0.5px solid rgb(225 225 225);
  height: 100%;
  width: 100%;
  /* padding: 0 2rem; */
`;

export const FormTableWrapper = styled.div`
  display: flex;
  border: 1px solid rgb(225 225 225);
  height: 100%;
  width: 65%;
  flex-direction: column;
  justify-content: space-between;
`;
export const FormWrapper = styled.div`
  display: flex;
  border: 1px solid rgb(225 225 225);
  height: 100%;
  width: 35%;
  flex-direction: column;
`;

export const TtileWrapper = styled.p`
  display: flex;
  border-bottom: 1px solid rgb(225 225 225);
  height: 6%;
  align-items: center;
  color: rgb(157 157 157);
  font-size: 20px;
  font-weight: 600;
  padding: 1rem;
`;

export const Form = styled.form`
  display: flex;
  /* border: 2px solid red; */
  height: 65%;
  width: 100%;
  flex-direction: column;
`;

export const Flex = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  width: 100%;
  height: 22%;
  justify-content: space-between;
  padding: 1rem;
`;
export const ItemNameWrapper = styled.div`
  display: flex;
  /* border: 2px solid red; */
  width: 48%;
  flex-direction: column;
  height: 100%;
`;
export const Text1 = styled.p`
  display: flex;
  font-size: 20px;
  color: rgb(165 188 215);
  margin-bottom: 10px;
`;
export const Text2 = styled.p`
  display: flex;
  font-size: 25px;
  color: rgb(157 157 157);
  font-weight: 600;
  align-items: center;
`;
export const Input = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  border: 2px solid rgb(231 228 228);
  &::placeholder {
    padding-left: 1.5rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  border: 2px solid rgb(231 228 228);
  border-radius: 4px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Submit = styled.button`
  display: flex;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  background-color: rgb(76 60 206);
`;

//Form Table Css Starts Here //

export const TableTitle = styled.p`
  display: flex;
  border-bottom: 1px solid rgb(225 225 225);
  height: 6%;
  align-items: center;
  color: grey;
  font-size: 18px;
  font-weight: 600;
  padding: 0 2rem;
`;

export const TableSearchbar = styled.div`
  display: flex;
  /* border: 2px solid green; */
  margin-top: 10px;
  height: 6%;
  width: 50%;
  padding: 0 2rem;
`;

export const SearchbarWrapper = styled.div`
  position: relative;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  justify-content: center;
  border-top: 2px solid rgb(231 228 228);
  border-left: 2px solid rgb(231 228 228);
  border-bottom: 2px solid rgb(231 228 228);
  width: 2rem;
`;

//Table data starts here//

export const TableDataWrapper = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  margin-top: 1rem;
  height: 80%;
  padding: 0 2rem;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */
  height: 100%;
  width: 100%;
`;

export const Thead = styled.thead`
  display: flex;
  height: 10%;
  border: 1px solid rgb(231 231 231);
  padding: 1rem;
  background-color: rgb(241 241 241);
`;
export const Tr = styled.tr`
  display: flex;
  height: 100%;
  width: 100%;
  /* border: 2px solid green; */
  padding: 1rem;
  justify-content: space-between;
`;

export const TBodyRow = styled.tr`
  display: flex;
  height: 15%;
  text-align: start;
  border: 1px solid rgb(231 231 231);
  padding: 2rem;
  /* margin-bottom: 1px; */
  justify-content: space-between;
`;

export const Th = styled.th`
  display: flex;
  text-transform: uppercase;
  color: rgb(183 183 183);
  height: 100%;
  align-items: center;
  text-align: center;
  /* border: 2px solid black; */
`;
export const Tbody = styled.tbody`
  display: flex;
  /* border: 2px solid blue; */
  flex-direction: column;
  height: 60%;
`;
export const Td = styled.td`
  display: flex;
  /* border: 2px solid gray; */
  width: 9%;
  align-items: center;
`;
