import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.main001};
  color: ${({ theme }) => theme.colors.background100};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 0.9rem;
`;
