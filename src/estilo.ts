import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    background-color: white;
     overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff;
  }
`;
