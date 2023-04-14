import PropTypes from 'prop-types';
import {
  TransactionChart,
  TableHead,
  TableRow,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionChart>
      <TableHead>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </TableHead>
      <tbody>
        {items.map(({ id, amount, type, currency }) => (
          <TableRow key={id}>
            <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableRow>
        ))}
      </tbody>
    </TransactionChart>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
