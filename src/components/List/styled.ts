import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  table {
    margin-top: 1rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background050};
    border-collapse: collapse;
    @media (max-width: 600px) {
      thead {
        display: none;
      }
      tr {
        border: 1px solid #ccc;
        td {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100% !important;
          border: 1px solid transparent !important;
          text-align: center;
        }
      }
    }
    th,
    td {
      padding: 0.65rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.main004};
      text-align: center;
      vertical-align: middle;
      font-size: 1.3rem;
    }
    thead {
      tr {
        background-color: ${({ theme }) => theme.colors.main004};
        color: ${({ theme }) => theme.colors.background100};
        th:nth-child(1) {
          border-right: 1px solid transparent;
        }
      }
    }
    tbody {
      tr {
        background-color: ${({ theme }) => transparentize(0.7, theme.colors.main004)};
        &:nth-child(even) {
          background-color: ${({ theme }) => transparentize(0.9, theme.colors.main004)};
        }
        td:nth-child(1) {
          img {
            width: 60px;
            height: 60px;
          }
        }
        td:nth-child(2) {
          width: 200px;
          text-align: left;
          color: ${({ theme }) => theme.colors.main001};
        }
        td:nth-child(3),
        td:nth-child(5) {
          font-size: 1.1rem;
        }
        td:nth-child(4) {
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;

            input {
              width: 60px;
              height: 30px;
              text-align: center;
              font-weight: 700;
              font-size: 1.3rem;
              color: ${({ theme }) => theme.colors.main001};
              outline: 0;
              border: 1px solid var(--secondary001);
              margin: 0 0.3rem;
            }
          }
          strong {
            font-size: 0.8rem;
            background-color: ${({ theme }) => theme.colors.main001};
            height: 20px;
            border-radius: 10px;
            display: block;
            position: relative;
            margin-top: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      svg {
        cursor: pointer;
        opacity: 0.7;
        transition: color 0.2s;
        color: ${({ theme }) => transparentize(0.5, theme.colors.main001)};

        &:hover {
          color: ${({ theme }) => transparentize(0, theme.colors.main001)};
        }
      }
    }

    tfoot {
      font-weight: bold;
      background-color: ${({ theme }) => theme.colors.main004};
      color: ${({ theme }) => theme.colors.background100};
      td:nth-child(1) {
        text-align: left;
        font-size: 1.8rem;
      }
      td:nth-child(2) {
        text-align: right;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.main001};
      }
    }
  }
`;
