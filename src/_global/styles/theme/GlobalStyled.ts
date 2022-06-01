import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background100};
    color: ${({ theme }) => theme.colors.main001};
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  /*MEDIA SCREEN*/
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-family: ${({ theme }) => theme.fonts.title};
  }

  p,
  span,
  input,
  textarea,
  select,
  table th, table td,
  button {
    font-family: ${({ theme }) => theme.fonts.text};
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.7);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover:disabled {
      filter: brightness(1);
    }
  }  
`;
