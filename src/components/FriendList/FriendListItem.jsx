import PropTypes from 'prop-types';
import scss from './FriendList.module.scss';

export const FriendListItem = ({ item }) => {

  const status = item.isOnline ? scss.statusGreen : scss.statusRed;

  return (
    <>
      <span className={status}></span>
      <img className={scss.avatar} src={item.avatar} alt={item.name} width="48" />
      <p className={scss.name}>{item.name}</p>
    </>
  );
}


FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
}