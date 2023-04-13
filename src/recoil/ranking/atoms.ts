import { atom } from 'recoil';
import { ComicRankItem } from '../../types';

export const comicRankItemsState = atom<ComicRankItem[]>({
  key: 'comicRankItemsState',
  default: [],
});

export const rankingComicsFilterState = atom<string[]>({
  key: 'rankingComicsFilterState',
  default: [],
});
