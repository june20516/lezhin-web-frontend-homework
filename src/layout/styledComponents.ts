import styled from 'styled-components';

export const StyledMobileLayout = styled.div`
  width: 100%;
  max-width: ${props => props.theme.layoutMeasures.maxWidth};
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  height: ${props => props.theme.layoutMeasures.height};
  overflow: auto;
  position: relative;
`;

export const MobilePageHasHeader = styled.div`
  width: 100%;
  height: calc(${props => props.theme.layoutMeasures.height} - var(--height-mobile-header));
  overflow: auto;
`;
