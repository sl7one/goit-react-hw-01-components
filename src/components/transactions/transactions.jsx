import PropTypes from 'prop-types';
import css from '../transactions/transactions.module.css';
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
  let color;
  switch (type) {
    case 'invoice':
      color = { backgroundColor: 'green' };
      break;
    case 'withdrawal':
      color = { backgroundColor: 'yellow' };
      break;
    case 'deposit':
      color = { backgroundColor: 'blue' };
      break;
    case 'payment':
      color = { backgroundColor: 'orange' };
      break;
  }
  return color;
}

Transactions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
