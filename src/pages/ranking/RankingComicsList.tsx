import { ComicRankApiSuccessResponse, isComicRankApiSuccessResponse } from '../../types';

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { get } from '../../lib/api';

import { ListContainer } from '../../components/styledComponents';
import RankingComicsListItem from './RankingComicsListItem';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { comicRankItemsState } from '../../recoil/ranking/atoms';
import { filteredComicRankItemsState } from '../../recoil/ranking/selectors';

export default function RankingComicsList({ genre }: { genre: string }) {
  const [hasNext, setHasNext] = useState(true);
  const setComicRankItems = useSetRecoilState(comicRankItemsState);
  const filteredComicRankItmes = useRecoilValue(filteredComicRankItemsState);
  const loadComicRankItems = useCallback(
    async (page: number) => {
      get({ path: `/api/comics/${genre}`, page: page })
        .then(async response => {
          const parsedResponse = await response.json();
          if (isComicRankApiSuccessResponse(parsedResponse)) {
            const comicRankApiSucessResponse: ComicRankApiSuccessResponse = parsedResponse;
            setHasNext(parsedResponse.hasNext);
            setComicRankItems(prev => [...prev, ...comicRankApiSucessResponse.data]);
          }
        })
        .catch(error => console.log(error));
    },
    [genre, setComicRankItems],
  );

  return (
    <ListContainer>
      {filteredComicRankItmes.map(comic => {
        return <RankingComicsListItem key={comic.id} comic={comic} />;
      })}
      <InfiniteLoader hasNext={hasNext} loadMore={loadComicRankItems} />
    </ListContainer>
  );
}

function InfiniteLoader({
  hasNext,
  loadMore,
  children,
}: {
  hasNext: boolean;
  loadMore: (page: number) => void;
  children?: ReactNode;
}) {
  const [page, setPage] = useState(0);
  const loading = useRef(null);
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '20px',
      threshold: 0.8,
    };
  }, []);

  const handleObserver = useCallback(async (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) setPage(prev => prev + 1);
  }, []);

  useEffect(() => {
    loadMore(page);
  }, [loadMore, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (loading.current && hasNext) observer.observe(loading.current);
    return () => observer.disconnect();
  }, [handleObserver, hasNext, options]);

  return (
    <div ref={loading} style={{ width: '100%', display: hasNext ? 'block' : 'none' }}>
      {children ? children : 'Loading More..'}
    </div>
  );
}
