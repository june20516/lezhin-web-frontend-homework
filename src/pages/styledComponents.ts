import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RankingButton = styled(Link)`
  padding: 0.8rem;
  width: 30%;
  height: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border: solid 1px;
  border-color: ${props => props.theme.color.primary};
  border-radius: 1rem;

  font-size: ${props => props.theme.fontSize.md};
  text-decoration: none;
  color: ${props => props.theme.color.black};

  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.white};
  }
`;

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > a {
    margin-bottom: 1rem;
  }
`;
