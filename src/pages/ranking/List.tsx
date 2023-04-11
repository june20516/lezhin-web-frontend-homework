import { ListContainer } from '../../components/styledComponents';
import { ComicRankItem } from '../../types';
import ListItem from './ListItem';

export default function List({ comics }: { comics: ComicRankItem[] }) {
  return (
    <ListContainer>
      {comics.map(comic => {
        return <ListItem comic={comic} />;
      })}
    </ListContainer>
  );
}
