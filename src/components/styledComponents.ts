import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
  height: var(--height-mobile-header);
  width: ${props => props.theme.layoutMeasures.maxWidth};

  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-bottom: solid 1px ${props => props.theme.color.gray};
  background-color: white;
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

export const ListContainer = styled.div`
  padding: 1rem;
`;

export const FilterContainer = styled.div`
  box-sizing: border-box;
  padding: 0.8rem;

  position: fixed;
  top: var(--height-mobile-header);

  width: ${props => props.theme.layoutMeasures.maxWidth};
  height: var(--height-mobile-header);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${props => props.theme.color.white};
`;

export const FilterHolder = styled.div`
  width: ${props => props.theme.layoutMeasures.maxWidth};
  height: var(--height-mobile-header);
`;

export const FilterItem = styled.div<{ selected: boolean }>`
  padding: 0.8rem;
  margin-right: 0.8rem;

  border: solid 1px ${props => props.theme.color.primary};
  border-radius: 0.8rem;

  font-size: ${props => props.theme.fontSize.base};

  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${props => props.theme.color.primary};
      color: ${props => props.theme.color.white};
    `}
`;
