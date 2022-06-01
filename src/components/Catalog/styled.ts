import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
