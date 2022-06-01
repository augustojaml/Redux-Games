import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  margin-top: 1rem;
  height: 3rem;
  border: 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => transparentize(0.3, theme.colors.main001)};
  color: ${({ theme }) => theme.colors.background100};

  .icon {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.main001};
    position: relative;
    svg {
      font-size: 1.5rem;
    }
    span {
      position: absolute;
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.main002};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.main001};
      right: 4px;
      top: 4px;
      font-size: 0.7rem;
      line-height: 1.2rem;
    }
  }
  .title {
    flex: 1;
    width: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export const Title = styled.h1``;
