import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <li key={id} className="item">
      <span
        className="status"
        style={{ background: isOnline ? 'green' : 'red' }}
      >
        {isOnline}o
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
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
