import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { pageTitleState } from '../../recoil/metaInfo/atoms';
import List from './List';
import { MobilePageHasHeader } from '../../layout/styledComponents';
import Filter from './filter';

const DEFAULT_GENRE_KEY = 'romance';

const PREPARED_GENRES = [
  { key: 'romance', displayName: '로맨스' },
  { key: 'drama', displayName: '드라마' },
];

export default function Ranking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const genre = searchParams.get('genre') || '';
  const setTitle = useSetRecoilState(pageTitleState);

  useEffect(() => {
    const validGenre = PREPARED_GENRES.find(prepared_genre => prepared_genre.key === genre);
    if (!validGenre) {
      navigate({ pathname: '/ranking', search: `?genre=${DEFAULT_GENRE_KEY}` });
    } else {
      setTitle(`${validGenre.displayName} 장르 랭킹`);
    }
  }, [genre, navigate, setTitle]);

  return (
    <MobilePageHasHeader>
      <Filter></Filter>
      <List genre={genre} />
    </MobilePageHasHeader>
  );
}
