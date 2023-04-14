import { ArtistRole, ComicRankItem, Period } from '../../types';
import { ReactComponent as Jayme } from '../../assets/image/placeholder/jaymee.svg';
import {
  ListItem,
  ListItemDetail,
  ListItemInfo,
  ListItemTitle,
} from '../../components/styledComponents';
import { useCallback, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

export default function RankingComicsListItem({ comic }: { comic: ComicRankItem }) {
  const rankChange = comic.previousRank - comic.currentRank;
  const [isThumbnailLoaded, setIsThmbnailLoaded] = useState(true);
  const themeContext = useContext(ThemeContext);

  const getDisplayRole = useCallback((role: ArtistRole): string | null => {
    switch (role) {
      case 'writer':
        return '작가';
      case 'painter':
        return '그림';
      case 'scripter':
        return '글';
      case 'original':
      case 'publisher':
      case 'label':
        return null;
    }
  }, []);

  const getDisplayDayOfWeek = useCallback((abbreviations: Period[]): string => {
    const displayDayOfWeek = {
      MON: '월요일',
      TUE: '화요일',
      WED: '수요일',
      THU: '목요일',
      FRI: '금요일',
      SAT: '토요일',
      SUN: '일요일',
    };

    return abbreviations.reduce<string>((prev, curr, currIndex) => {
      if (currIndex === 0) return displayDayOfWeek[curr];
      return `${prev}, ${displayDayOfWeek[curr]}`;
    }, '');
  }, []);

  return (
    <ListItem>
      <div>
        {comic.thumbnailSrc && isThumbnailLoaded ? (
          <img
            src={comic.thumbnailSrc}
            alt={`thumbnail of ${comic.title}`}
            onError={() => setIsThmbnailLoaded(false)}
            style={{ verticalAlign: 'middle' }}
          />
        ) : (
          <ThumbnailPlaceholder />
        )}
      </div>
      <ListItemInfo
        style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem', width: '100%' }}>
        <div
          className="rank"
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'baseline',
          }}>
          <p
            style={{
              display: 'inline-block',
              fontSize: themeContext.fontSize.md,
              fontStyle: 'italic',
              textAlign: 'center',
              fontWeight: comic.currentRank <= 3 ? 'bold' : 'unset',
            }}>
            {comic.currentRank}
          </p>
          <p
            style={{
              display: 'inline-block',
              fontSize: themeContext.fontSize.xs,
              color: themeContext.color.darkGray,
              margin: '0 0.3rem 0 0.3rem',
            }}>{`${rankChange === 0 ? '-' : rankChange > 0 ? '▲' : '▼'} ${
            rankChange !== 0 ? rankChange : ''
          }`}</p>
        </div>
        <ListItemTitle>{comic.title}</ListItemTitle>
        <ListItemDetail>
          <div style={{ marginBottom: '0.5rem' }}>
            {comic.artists.map((artist, index) => {
              const displayRole = getDisplayRole(artist.role);
              return (
                displayRole && (
                  <p key={index} style={{ display: 'inline-block', marginRight: '0.3rem' }}>
                    <span style={{ fontWeight: 'bold', marginRight: '0.3rem' }}>{displayRole}</span>
                    <span>{artist.name}</span>
                  </p>
                )
              );
            })}
          </div>
          {comic.freedEpisodeSize > 0 && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span>{comic.freedEpisodeSize}화 무료!</span>
            </div>
          )}
          <div>
            {comic.contentsState === 'completed' ? (
              <p>완결</p>
            ) : (
              <p>매주 {getDisplayDayOfWeek(comic.schedule.periods)} 연재</p>
            )}
          </div>
        </ListItemDetail>
      </ListItemInfo>
    </ListItem>
  );
}

function ThumbnailPlaceholder() {
  return (
    <div
      className="image"
      style={{
        width: '9rem',
        aspectRatio: 1,
        backgroundColor: `#FF${(Math.floor((Math.random() + 1) * 5) * 1111).toString()}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Jayme />
    </div>
  );
}
