import PropTypes from 'prop-types';
import css from '../Transactions/Transactions.module.css';
export default function Transactions({ data }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(item => (
          <tr key={item.id} style={color(item.type)} className={css.tr}>
            <td>{item.type}</td>
            <td className={css.td}>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function color(type) {
  switch (type) {
    case 'invoice':
      return { backgroundColor: 'green' };
    case 'withdrawal':
      return { backgroundColor: 'yellow' };
    case 'deposit':
      return { backgroundColor: 'blue' };
    case 'payment':
      return { backgroundColor: 'orange' };
    default:
      return {
        backgroundColor: 'black',
      };
  }
}

Transactions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
