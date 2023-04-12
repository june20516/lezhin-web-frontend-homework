import styled from 'styled-components';

export const StyledMobileLayout = styled.div`
  width: ${props => props.theme.layoutMeasures.maxWidth};
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  height: ${props => props.theme.layoutMeasures.height};
  overflow: auto;
  position: relative;
`;
