import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: var(--height-mobile-header);
  width: ${props => props.theme.layoutMeasures.maxWidth};
  position: fixed;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid 1px ${props => props.theme.color.gray};
`;

export const HeaderHolder = styled.div`
  height: var(--height-mobile-header);
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: bold;
  padding-left: 1rem;
`;

export const ListContainer = styled.ul`
  padding: 1rem;
`;
