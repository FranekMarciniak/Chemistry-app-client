import React from "react";
import styled from "styled-components";
function Wrapper({ children }) {
  const WrapperSection = styled.section`
    width: 50%;
    height: 85%;
    min-width: 400px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
  `;
  return <WrapperSection>{children}</WrapperSection>;
}
export default Wrapper;
