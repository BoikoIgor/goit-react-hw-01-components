import styled from 'styled-components';

export const FriendsItem = styled.li`
  background: ${props => props.theme.colors.white};
  border-radius: 0.3rem;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  display: flex;
  justify-content: start;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 0.6rem;
  }
`;

export const StatusOnline = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 1rem;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const Avatar = styled.img`
  border-radius: 1rem;
  background-color: #bfbfbf;
  margin: 0.3rem 0;
  &:hover {
    background: ${props => props.theme.colors.accent};
  }
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 1rem;
`;
