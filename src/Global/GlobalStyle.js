import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rationale', sans-serif;
}
button{
    width: fit-content;
    padding: 0.5rem 1rem;
    color: #000;
    background-color: #7d688b;
    border-radius: .5rem;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow:  2px 2px 4px #000;
    transition: all .3s;
    margin: 0 auto;
    &:hover {
    box-shadow:  none;
    transform: scale(.99);
  }
}
`