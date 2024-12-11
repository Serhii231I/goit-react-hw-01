import styles from "../TransactionHistory/TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.theadWrapper}>
        <tr className={styles.trWrapper}>
          <th className={styles.textHeader}>Type</th>
          <th className={styles.textHeader}>Amount</th>
          <th className={styles.textHeader}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tBodyWrapper}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.trList} key={id}>
            <td className={styles.tdItem}>{type}</td>
            <td className={styles.tdItem}>{amount}</td>
            <td className={styles.tdItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
