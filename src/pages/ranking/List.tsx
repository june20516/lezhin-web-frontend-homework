import { ListContainer } from '../../components/styledComponents';
import { ComicRankItem } from '../../types';

export default function List({ comics }: { comics: ComicRankItem[] }) {
  return (
    <ListContainer>
      {comics.map(comic => {
        return <div>{JSON.stringify(comic)}</div>;
      })}
    </ListContainer>
  );
}
