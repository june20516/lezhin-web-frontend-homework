import { useEffect, useState } from 'react';

import { FilterContainer, FilterHolder, FilterItem } from '../../components/styledComponents';
import { useSetRecoilState } from 'recoil';
import { rankingComicsFilterState } from '../../recoil/ranking/atoms';

export default function RankingComicsFilter() {
  const [isSerialized, setIsSerialized] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFreeTicketMoreOrTree, setIsFreeTicketMoreOrTree] = useState(false);
  const [isPublishedAsBook, setIsPublishedAsBook] = useState(false);
  const setFilterItems = useSetRecoilState(rankingComicsFilterState);

  const toggleIsSerialized = () => {
    setIsSerialized(!isSerialized);
  };
  const toggleIsCompleted = () => {
    setIsCompleted(!isCompleted);
    if (isCompleted) setIsSerialized(false);
  };
  const toggleIsFreeTicketMoreOrTree = () => setIsFreeTicketMoreOrTree(!isFreeTicketMoreOrTree);
  const toggleIsPublishedAsBook = () => setIsPublishedAsBook(!isPublishedAsBook);

  useEffect(() => {
    if (isSerialized) setIsCompleted(false);
  }, [isSerialized]);

  useEffect(() => {
    if (isCompleted) setIsSerialized(false);
  }, [isCompleted]);

  useEffect(() => {
    const selectedFilter = [];
    if (isSerialized) selectedFilter.push('isSericalized');
    if (isCompleted) selectedFilter.push('isCompleted');
    if (isFreeTicketMoreOrTree) selectedFilter.push('isFreeTicketMoreOrTree');
    if (isPublishedAsBook) selectedFilter.push('isPublishedAsBook');
    setFilterItems(selectedFilter);
  }, [isCompleted, isFreeTicketMoreOrTree, isPublishedAsBook, isSerialized, setFilterItems]);

  return (
    <>
      <FilterContainer>
        <FilterItem selected={isSerialized} onClick={toggleIsSerialized}>
          연재중
        </FilterItem>
        <FilterItem selected={isCompleted} onClick={toggleIsCompleted}>
          완결
        </FilterItem>
        <FilterItem selected={isFreeTicketMoreOrTree} onClick={toggleIsFreeTicketMoreOrTree}>
          무료회차 3개 이상
        </FilterItem>
        <FilterItem selected={isPublishedAsBook} onClick={toggleIsPublishedAsBook}>
          단행본 발매작
        </FilterItem>
      </FilterContainer>
      <FilterHolder />
    </>
  );
}
