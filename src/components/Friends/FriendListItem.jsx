import css from './Friends.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li className={css.list__item} key={friend.id}>
      <span
        className={css.circle}
        style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
      ></span>
      <img src={friend.avatar} alt={friend.name} width="48" />
      <p className="name">{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
