import PropTypes from 'prop-types';
import scss from './TransactionHistory.module.scss';

export const TransactionHistory = ({ transactions }) => (
  <table className={scss.transactionHistory}>
    <thead>
      <tr className={scss.headRow}>
        <th className={scss.headCell}>Type</th>
        <th className={scss.headCell}>Amount</th>
        <th className={scss.headCell}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(item => (
        <tr key={item.id} className={scss.ordinaryRow}>
          <td className={scss.ordinaryCell}>{item.type}</td>
          <td className={scss.ordinaryCell}>{item.amount}</td>
          <td className={scss.ordinaryCell}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
}