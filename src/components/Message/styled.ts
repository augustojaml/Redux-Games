import { transparentize } from 'polished';
import styled from 'styled-components';

interface ImessageProps {
  color?: string;
}

export const Container = styled.div<ImessageProps>`
  padding: 1.5rem;
  .content {
    max-width: 900px;
    margin: 0 auto;
    background: red;
    background-color: ${({ theme, color }) =>
      transparentize(0.5, color ? color : theme.colors.secondary500)};
    border: ${({ theme, color }) => `1px solid ${color ? color : theme.colors.secondary500}`};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 1rem;
    svg {
      font-size: 40px;
      margin-bottom: 1rem;
      fill: ${({ theme, color }) => (color ? color : theme.colors.secondary500)};
    }
    h3 {
      color: ${({ theme, color }) => (color ? color : theme.colors.secondary500)};
    }
  }
`;

export const Title = styled.h1``;
