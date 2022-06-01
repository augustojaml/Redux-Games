import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem 1.5rem 0 1.5rem;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.main002};
  color: ${({ theme }) => theme.colors.background100};
  height: 12rem;

  max-width: 900px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 4rem;
  }
  h1 {
    color: ${({ theme }) => theme.colors.main001};
    font-size: 2.5rem;
    margin: 1rem 0 0.2rem;
  }
  p {
    font-size: 1.3rem;
  }
`;
