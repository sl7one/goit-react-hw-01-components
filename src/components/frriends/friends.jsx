import PropTypes from 'prop-types';
import css from './friends.module.css';
export default function Friends({ data }) {
  return (
    <ul className={css.friend__list}>
      {data.map(friend => (
        <li className={css.list__item} key={friend.id}>
          <span
            className={css.circle}
            style={
              friend.isOnline
                ? {
                    backgroundColor: 'green',
                  }
                : {
                    backgroundColor: 'red',
                  }
            }
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
