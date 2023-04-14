import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsUL } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsUL>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendsUL>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
