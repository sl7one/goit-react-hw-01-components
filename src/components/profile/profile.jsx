import PropTypes from 'prop-types';
import css from './profile.module.css';

export default function Profile({
  avatar,
  location,
  tag,
  username,
  followers,
  wiews,
  likes,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
          style={{ width: 150 }}
        />
        <p className={css.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.list__item}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css.list__item}>
          <span className="label">Views</span>
          <span className="quantity">{wiews}</span>
        </li>
        <li className={css.list__item}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  localStorage: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
