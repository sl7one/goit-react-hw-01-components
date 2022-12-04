import '../index.css';
//------components--------------//
import Profile from './profile/profile';
import Friends from './frriends/friends';
import Statistics from './statistics/statistics';
import Transactions from './transactions/transactions';
//------------data-------------//
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transData from '../data/transactions.json';
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
        followers={user.stats.followers}
        wiews={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" data={data} />
      <Friends data={friends} />
      <Transactions data={transData} />
    </div>
  );
};
