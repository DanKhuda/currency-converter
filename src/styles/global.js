import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.lightGrey};
    font-family: "Montserrat";
  }
`;
