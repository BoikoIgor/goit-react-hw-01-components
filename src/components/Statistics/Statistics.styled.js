import styled from 'styled-components';

export const StatsWrap = styled.section`
  background: ${props => props.theme.colors.white};
  border-radius: 0.3rem;
  color: ${props => props.theme.colors.black};
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  margin: 1rem;
  overflow: hidden;
`;
export const Title = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: #dbdbdb;
  margin: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 2rem;
  width: 100%;
  color: ${props => props.theme.colors.white};
  & span:not(:last-child) {
    margin-bottom: 0.6rem;
  }
  & span:last-child {
    font-size: 1.5rem;
  }
`;
