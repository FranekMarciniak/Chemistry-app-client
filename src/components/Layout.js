import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
function Layout({ children }) {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
    typography: {
      fontFamily: ['"Open Sans"'].join(","),
    },
  });
  const Main = styled.main`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Main>{children}</Main>
        <footer></footer>
      </ThemeProvider>
    </>
  );
}

export default Layout;
