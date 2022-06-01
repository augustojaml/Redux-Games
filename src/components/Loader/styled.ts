import styled from 'styled-components';

interface IStyledProps {
  padding?: number;
}

export const Container = styled.div<IStyledProps>`
  padding: ${({ padding }) => (padding ? padding : 0)}rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
