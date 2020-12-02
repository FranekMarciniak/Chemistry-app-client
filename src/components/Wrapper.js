import React from "react";
import styled from "styled-components";
const WrapperSection = styled.section`
  width: 70%;
  height: 85%;
  min-height: 420px;
  min-width: 400px;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media (max-width: 850px) {
    width: 90%;
  }
`;
function Wrapper({ children }) {
  return <WrapperSection>{children}</WrapperSection>;
}
export default Wrapper;
