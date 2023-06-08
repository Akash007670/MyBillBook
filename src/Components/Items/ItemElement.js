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
  @media screen and (max-width: 968px) {
    width: 100%;
  }
`;

export const PhoneNumber = styled.div`
  display: flex;
  /* border: 2px solid red; */
  font-size: 20px;
  font-weight: 600;
`;

export const Logout = styled.button`
  display: flex;
  font-size: 16px;
  width: 100px;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #e72a2a;
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
  @media screen and (max-width: 968px) {
    width: 70%;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  border: 1px solid rgb(225 225 225);
  height: 100%;
  width: 35%;
  flex-direction: column;
  @media screen and (max-width: 968px) {
    width: 30%;
  }
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
  height: 65%;
  width: 100%;
  flex-direction: column;
  @media screen and (max-width: 968px) {
    height: 100%;
    padding: 1rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  width: 100%;
  height: 25%;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  @media screen and (max-width: 968px) {
    flex-direction: column;
    height: 25%;
    padding: 0;
  }
`;
export const ItemNameWrapper = styled.div`
  display: flex;
  /* border: 2px solid red; */
  width: 48%;
  height: 100%;
  flex-direction: column;
  @media screen and (max-width: 968px) {
    width: 100%;
  }
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
  @media screen and (max-width: 968px) {
    justify-content: center;
    text-align: center;
    margin-top: 3rem;
  }
`;
export const Input = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  border: 2px solid rgb(231 228 228);
  &::placeholder {
    padding-left: 1rem;
  }
  @media screen and (max-width: 968px) {
    height: 100%;
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
  margin-top: 1rem;
  background-color: rgb(76 60 206);
  @media screen and (max-width: 968px) {
    margin-top: 2rem;
    height: 40%;
  }
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
  position: relative;
  margin: 0 2rem;
  height: 6%;
  width: 50%;
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

//Table data starts here//

export const TableDataWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  height: 80%;
  padding: 0 2rem;
  /* border: 2px solid red; */
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* border: 2px solid brown; */
`;

export const Thead = styled.thead`
  display: flex;
  height: 10%;
  border: 1px solid rgb(231 231 231);
  padding: 1rem;
  background-color: rgb(241 241 241);
  @media screen and (max-width: 968px) {
    padding: 0;
  }
`;
export const Tr = styled.tr`
  display: flex;
  height: 100%;
  width: 100%;
  /* border: 2px solid green; */
  /* padding: 1rem; */
  justify-content: space-between;
  @media screen and (max-width: 968px) {
    padding: 0;
  }
`;

export const TBodyRow = styled.tr`
  display: flex;
  height: 50px;
  text-align: center;
  border: 1px solid rgb(231 231 231);
  align-items: center;
  align-content: center;
  padding: 10px 5px;
  /* margin-bottom: 1px; */
  font-size: 16px;
  justify-content: space-around;
`;

export const Th = styled.th`
  display: flex;
  text-transform: uppercase;
  color: rgb(183 183 183);
  height: 100%;
  align-items: center;
  text-align: center;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 968px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`;
export const Tbody = styled.tbody`
  display: flex;
  /* border: 2px solid blue; */
  flex-direction: column;
  overflow: auto;
  height: 90%;
`;
export const Td = styled.td`
  display: flex;
  /* border: 2px solid gray; */
  width: 10%;
  height: 20px;
  align-items: center;
  cursor: pointer;
`;

export const NotFound = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NotFoundTitle = styled.p`
  display: flex;
  font-size: 20px;
  font-weight: 600;
  margin-left: 1rem;
  color: rgb(165 188 215);
`;

export const ErrorText = styled.p`
  display: flex;
  /* border: 2px solid red; */
  font-size: 10px;
  color: red;
  /* margin-top: 1rem; */
`;
