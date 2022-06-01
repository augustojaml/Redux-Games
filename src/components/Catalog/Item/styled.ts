import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background050};
  padding: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => `-4px 8px 5px -3px ${rgba(theme.colors.main001, 0.1)}`};
  img {
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30px;
  }
  strong {
    display: block;
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`;
