import { useEffect, useState } from 'react';

import { FilterContainer, FilterHolder, FilterItem } from '../../components/styledComponents';

export default function Filter() {
  const [isSerialized, setIsSerialized] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFreeTicketMoreThanTree, setIsFreeTicketMoreThanTree] = useState(false);
  const [isPublishedAsBook, setIsPublishedAsBook] = useState(false);

  const toggleIsSerialized = () => {
    setIsSerialized(!isSerialized);
  };
  const toggleIsCompleted = () => {
    setIsCompleted(!isCompleted);
    if (isCompleted) setIsSerialized(false);
  };
  const toggleIsFreeTicketMoreThanTree = () =>
    setIsFreeTicketMoreThanTree(!isFreeTicketMoreThanTree);
  const toggleIsPublishedAsBook = () => setIsPublishedAsBook(!isPublishedAsBook);

  useEffect(() => {
    if (isSerialized) setIsCompleted(false);
  }, [isSerialized]);

  useEffect(() => {
    if (isCompleted) setIsSerialized(false);
  }, [isCompleted]);

  return (
    <>
      <FilterContainer>
        <FilterItem selected={isSerialized} onClick={toggleIsSerialized}>
          연재중
        </FilterItem>
        <FilterItem selected={isCompleted} onClick={toggleIsCompleted}>
          완결
        </FilterItem>
        <FilterItem selected={isFreeTicketMoreThanTree} onClick={toggleIsFreeTicketMoreThanTree}>
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
