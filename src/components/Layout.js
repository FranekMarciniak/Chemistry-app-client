import React from "react";
import Header from "./Header";
import styled from "styled-components";

function Layout({ children }) {
  const Main = styled.main`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <footer></footer>
    </>
  );
}

export default Layout;
