import PropTypes from 'prop-types';
import {
  FriendsItem,
  StatusOnline,
  Avatar,
  Name,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <FriendsItem key={id}>
      <StatusOnline style={{ background: isOnline ? 'green' : 'red' }}>
        {isOnline}
      </StatusOnline>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
