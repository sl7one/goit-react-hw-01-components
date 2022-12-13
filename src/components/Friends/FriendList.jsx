import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './Friends.module.css';

export default function FriendList({ data }) {
  return (
    <ul className={css.friend__list}>
      {data.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
