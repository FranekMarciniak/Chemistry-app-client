import React from "react";
import styled from "styled-components";

function FormRow({ children }) {
  const Row = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-items: center;
  `;
  return <Row>{children}</Row>;
}

export default FormRow;
