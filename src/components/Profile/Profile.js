import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  StatsList,
  StatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} width="128" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <span>
            <b>{stats.followers.toLocaleString('en-US')}</b>
          </span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">
            <b>{stats.views.toLocaleString('en-US')}</b>
          </span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">
            <b>{stats.likes.toLocaleString('en-US')}</b>
          </span>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
