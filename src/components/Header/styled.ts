import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.main001};
  color: ${({ theme }) => theme.colors.background100};
  height: 5rem;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartContainer = styled.div`
  position: relative;
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
  div {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.main002};
    font-size: 0.8rem;
    line-height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -4px;
    right: -8px;
    span {
      position: relative;
      top: 1.5px;
    }
  }
`;
