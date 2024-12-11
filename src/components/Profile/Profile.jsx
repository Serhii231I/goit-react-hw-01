import styles from "../Profile/Profile.module.css";
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.wraper}>
      <img className={styles.icon} src={avatar} alt="User avatar" />
      <p className={styles.userName}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
      <ul className={styles.userList}>
        <li className={styles.userItem}>Followers {stats.followers}</li>
        <li className={styles.userItem}>Views {stats.views}</li>
        <li className={styles.userItem}>Likes {stats.likes}</li>
      </ul>
    </div>
  );
};
export default Profile;
