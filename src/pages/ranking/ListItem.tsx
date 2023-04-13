import { ArtistRole, ComicRankItem } from '../../types';
import { ReactComponent as Jayme } from '../../assets/image/placeholder/jaymee.svg';

export default function ListItem({ comic }: { comic: ComicRankItem }) {
  const rankChange = comic.previousRank - comic.currentRank;

  const getDisplayRole = (role: ArtistRole): string | null => {
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
  };
  return (
    <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
      <div>
        {comic.thumbnailSrc ? (
          <img src={comic.thumbnailSrc} alt={`thumbnail of ${comic.title}`} />
        ) : (
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
        )}
      </div>
      <div
        className="rank"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '0.5rem',
        }}>
        <p style={{ fontSize: '2rem', fontStyle: 'italic', textAlign: 'center' }}>
          {comic.currentRank}
        </p>
        <p>{`${rankChange === 0 ? '-' : rankChange > 0 ? '▲' : '▼'} ${rankChange}`}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{comic.title}</p>
        </div>
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
            <span style={{ fontSize: '1rem' }}>{comic.freedEpisodeSize}화 무료!</span>
          </div>
        )}
        <div>
          {comic.contentsState === 'completed' ? (
            <p>완결</p>
          ) : (
            <p>매주 {comic.schedule.periods} 연재</p>
          )}
        </div>
      </div>
    </div>
  );
}
