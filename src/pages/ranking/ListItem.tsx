import { ComicRankItem } from '../../types';
import { ReactComponent as Jayme } from '../../assets/image/placeholder/jaymee.svg';

export default function ListItem({ comic }: { comic: ComicRankItem }) {
  const rankChange = comic.previousRank - comic.currentRank;
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
        <p style={{ fontSize: '2rem', fontStyle: 'italic' }}>{comic.currentRank}</p>
        <p>{`${rankChange === 0 ? '-' : rankChange > 0 ? '▲' : '▼'} ${rankChange}`}</p>
      </div>
      <div style={{ display: 'flex' }}>
        <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{comic.title}</p>
      </div>
    </div>
  );
}
