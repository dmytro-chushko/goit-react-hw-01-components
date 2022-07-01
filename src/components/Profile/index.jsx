import PropTypes from 'prop-types';
import scss from './Profile.module.scss';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  
  // const { profile, description, avatar, name, tag, location, stats, label, quantity } = scss;
  
  return (
  
    <div className={scss.profile}>
      <div className={scss.description}>
        <img
          src={avatar}
          alt={username}
          className={scss.avatar}
        />
        <p className={scss.name}>{username}</p>
        <p className={scss.tag}>@{tag}</p>
        <p className={scss.location}>{location}</p>
      </div>
      <ul className={scss.stats}>
        {Object.keys(stats).map(item => (
          <li key={item}>
            <span className={scss.label}>{item}</span>
            <span className={scss.quantity}>{stats[item]}</span>
          </li>
        ))}
      </ul>
    </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
