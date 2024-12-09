import styles from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendItem}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img src={avatar} alt={`${name}'s avatar`} width="80" />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </li>
  );
};

export default FriendListItem;