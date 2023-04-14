import { useRecoilValue } from 'recoil';
import { pageTitleState } from '../recoil/metaInfo/atoms';
import { HeaderHolder, HeaderTitle, StyledHeader } from './styledComponents';
import Logo from './logo';

export default function Header() {
  const title = useRecoilValue(pageTitleState);
  return (
    <>
      <StyledHeader className="header">
        <Logo width={'2rem'} />
        <HeaderTitle>{title}</HeaderTitle>
      </StyledHeader>
      <HeaderHolder />
    </>
  );
}
