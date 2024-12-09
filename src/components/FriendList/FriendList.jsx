import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';
const FriendList = ({ friends }) => {

    return (
        <ul className={styles.friendList}>        
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}    
        </ul>
    )                       
}
export default FriendList;