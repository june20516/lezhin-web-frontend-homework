import { useRecoilValue } from 'recoil';
import { pageTitleState } from '../recoil/metaInfo/atoms';
import { HeaderHolder, HeaderTitle, StyledHeader } from './styledComponents';

export default function Header() {
  const title = useRecoilValue(pageTitleState);
  return (
    <>
      <StyledHeader className="header">
        <HeaderTitle>{title}</HeaderTitle>
      </StyledHeader>
      <HeaderHolder />
    </>
  );
}
