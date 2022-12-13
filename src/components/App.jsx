import '../index.css';
//------components--------------//
import Profile from './Profile/Profile';
import Friends from './Friends/FriendList';
import Statistics from './Statistics/Statistics';
import Transactions from './Transactions/Transactions';
//------------data-------------//
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transData from '../data/transactions.json';
import FriendList from './Friends/FriendList';
//--------------------------------//

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList data={friends} />
      <Transactions data={transData} />
    </div>
  );
};
