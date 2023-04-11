import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { get } from '../lib/api';
import {
  ComicRankApiSuccessResponse,
  ComicRankItem,
  isComicRankApiSuccessResponse,
} from '../types';

const CONST_DEFAULT_GENRE = 'romance';

const PREPARED_GENRE = ['romance', 'drama'];

export default function Ranking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const genre = searchParams.get('genre');
  const [comics, setComics] = useState([] as ComicRankItem[]);
  const [page, setPage] = useState(0);

  const Ranking = styled.div``;

  useEffect(() => {
    if (!genre || !PREPARED_GENRE.includes(genre))
      navigate({ pathname: '/ranking', search: `?genre=${CONST_DEFAULT_GENRE}` });
    else setPage(page + 1);
  }, [genre, navigate]);

  useEffect(() => {
    get({ path: `/api/comics/${genre}`, page: page })
      .then(async response => {
        const parsedResponse = await response.json();
        if (isComicRankApiSuccessResponse(parsedResponse)) {
          const comicRankApiSucessResponse: ComicRankApiSuccessResponse = parsedResponse;
          setComics(comicRankApiSucessResponse.data);
        } else {
          console.error('Response format invalid');
        }
      })
      .catch(error => console.error(error));
  }, [page]);

  return (
    <Ranking className="home">
      <h1>Here is Ranking</h1>
      <h2> genre is {genre}</h2>
      comics count : {comics.length}
      {comics.map(comic => {
        return <div>{JSON.stringify(comic)}</div>;
      })}
    </Ranking>
  );
}
