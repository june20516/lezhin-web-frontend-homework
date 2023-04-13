import { selector } from 'recoil';
import { comicRankItemsState, rankingComicsFilterState } from './atoms';
import { ComicRankItem } from '../../types';

export const filteredComicRankItemsState = selector({
  key: 'filteredComicRankItemsState',
  get: ({ get }) => {
    const comicRankItems = get(comicRankItemsState);
    const filters = get(rankingComicsFilterState);
    return comicRankItems.filter(comicRankItem => {
      for (let filter of filters) {
        switch (filter) {
          case 'isSericalized':
            if (!validateIsSerialized(comicRankItem)) return false;
            break;
          case 'isCompleted':
            if (!validateIsCompleted(comicRankItem)) return false;
            break;
          case 'isFreeTicketMoreOrTree':
            if (!validateIsFreeTicketMoreOrTree(comicRankItem)) return false;
            break;
          case 'isPublishedAsBook':
            if (!validateIsPublishedAsBook(comicRankItem)) return false;
        }
      }
      return true;
    });
  },
});

const validateIsSerialized = (comicRankItem: ComicRankItem): boolean => {
  return comicRankItem.contentsState === 'scheduled';
};

const validateIsCompleted = (comicRankItem: ComicRankItem): boolean => {
  return comicRankItem.contentsState === 'completed';
};

const validateIsFreeTicketMoreOrTree = (comicRankItem: ComicRankItem): boolean => {
  return comicRankItem.freedEpisodeSize >= 3;
};

const validateIsPublishedAsBook = (comicRankItem: ComicRankItem): boolean => {
  return comicRankItem.isPrint;
};
