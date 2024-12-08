import Profile from './components/Profile/Profile';
import userData from '../src/userData.json';
import friends from '../src/friends.json';  
import FriendList from './components/FriendList/FriendList';
import transactions from '../src/transactions.json';  
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
const App = () => {
  
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} /> 
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App;