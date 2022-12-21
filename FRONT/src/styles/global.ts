import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
      font-size: 10px;
    }

  body {
    background: ${({ theme }) => theme.colors.white400};
    color: ${({ theme }) => theme.colors.gray500};
    font-family: 'Inter', sans-serif;
  }

  body, input, textarea, button{
    font: 400 1.4rem "Inter", sans-serif;
  }

  button{
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
