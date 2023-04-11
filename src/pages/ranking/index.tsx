import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { get } from '../../lib/api';
import {
  ComicRankApiSuccessResponse,
  ComicRankItem,
  isComicRankApiSuccessResponse,
} from '../../types';
import { useSetRecoilState } from 'recoil';
import { pageTitleState } from '../../recoil/metaInfo/atoms';
import List from './List';

const DEFAULT_GENRE_KEY = 'romance';

const PREPARED_GENRES = [
  { key: 'romance', displayName: '로맨스' },
  { key: 'drama', displayName: '드라마' },
];

export default function Ranking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const genre = searchParams.get('genre');
  const [comics, setComics] = useState([] as ComicRankItem[]);
  const [page, setPage] = useState(0);
  const setTitle = useSetRecoilState(pageTitleState);

  useEffect(() => {
    const validGenre = PREPARED_GENRES.find(prepared_genre => prepared_genre.key === genre);
    if (!validGenre) {
      navigate({ pathname: '/ranking', search: `?genre=${DEFAULT_GENRE_KEY}` });
      setPage(p => 1);
    } else {
      setTitle(`${validGenre.displayName} 장르 랭킹`);
      setPage(p => p + 1);
    }
  }, [genre, navigate, setTitle]);

  useEffect(() => {
    get({ path: `/api/comics/${genre}`, page: page })
      .then(async response => {
        const parsedResponse = await response.json();
        if (isComicRankApiSuccessResponse(parsedResponse)) {
          const comicRankApiSucessResponse: ComicRankApiSuccessResponse = parsedResponse;
          setComics(comicRankApiSucessResponse.data);
        }
      })
      .catch(error => console.error(error));
  }, [page, genre]);

  return <List comics={comics} />;
}
