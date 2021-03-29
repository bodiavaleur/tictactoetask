import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
  }
  
  body {
    height: 100vh;
  }
  
  #root {
    height: 100%;
  }
`;
