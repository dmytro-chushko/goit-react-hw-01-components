import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import scss from './FriendList.module.scss';

export const FriendList = ({friends}) => (
  <ul className={scss.friendList}>
    {friends.map(item => 
      <li className={scss.item} key= {item.id}>
        <FriendListItem item={item} />
      </li>
      )}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
}