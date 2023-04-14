import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 0.3rem;
  color: ${props => props.theme.colors.grey};
  overflow: hidden;
  margin: 1rem;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    margin: 0 0 0.6rem 0;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: #bfbfbf;
  margin: 2rem 4rem;
  &:hover {
    background: ${props => props.theme.colors.accent};
  }
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 1.25rem;
  font-weight: 500;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: #dbdbdb;
  margin: 1rem 0 0 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.grey};
  :not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.grey};
  }
  & span:not(:last-child) {
    margin-bottom: 0.3rem;
  }
  & b {
    color: ${props => props.theme.colors.black};
  }
`;
