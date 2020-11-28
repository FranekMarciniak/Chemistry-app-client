import React from "react";
import styled from "styled-components";
function Wrapper({ children }) {
  const WrapperSection = styled.section`
    width: 50%;
    height: 85%;
    background-color: black;
    min-width: 400px;
    max-width: 700px;
    color: white;
  `;
  return <WrapperSection>{children}</WrapperSection>;
}
export default Wrapper;
