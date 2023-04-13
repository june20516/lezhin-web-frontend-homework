import { RankingButton, StyledHome } from './styledComponents';
import { MobilePageHasHeader } from '../layout/styledComponents';

export default function Home() {
  return (
    <MobilePageHasHeader>
      <StyledHome className="home">
        <RankingButton to={{ pathname: '/ranking', search: '?genre=romance' }}>
          로맨스 랭킹
        </RankingButton>
        <RankingButton to={{ pathname: '/ranking', search: '?genre=drama' }}>
          드라마 랭킹
        </RankingButton>
      </StyledHome>
    </MobilePageHasHeader>
  );
}
