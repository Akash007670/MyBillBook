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
  height: 10%;
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
export const Text = styled.p`
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
  border-radius: 6px;
  border: 2px solid rgb(231 228 228);
  &::placeholder {
    padding: 1rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
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
