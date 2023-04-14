import styled from 'styled-components';

export const TransactionChart = styled.table`
  width: 35rem;
  background: ${props => props.theme.colors.white};
  border-radius: 0.3rem;
  color: ${props => props.theme.colors.black};
  overflow: hidden;
  margin: 1rem;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  border-collapse: collapse;
  text-align: center;
`;

export const TableHead = styled.thead`
  height: 2.5rem;
  background: #5ad1f2;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  height: 2.5rem;
  width: calc(35rem / 3);
  text-align: center;
  border: 1px solid #bfbfbf;
  & th:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.white};
  }
  & th:first-child {
    text-align: start;
    padding-left: 5rem;
    width: calc(35rem / 4);
  }
  & td {
    font-weight: lighter;
    border: 1px solid #bfbfbf;
  }
  & td:first-child {
    text-align: left;
    padding-left: 5rem;
    width: calc(35rem / 4);
    vertical-align: middle;
  }
  :nth-child(2n) {
    background-color: #e8e8e8;
  }
`;
