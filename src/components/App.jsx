import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from './FriendList';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';

export const App = () => {

  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
    </>
    
  );
};
