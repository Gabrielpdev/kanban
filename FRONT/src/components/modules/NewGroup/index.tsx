import { EmptyCard } from '../../elements/EmptyCard';
import * as S from './styles';

export function NewGroup() {
  return (
    <S.Group>
      <S.Header>
        <S.Title>New</S.Title>
      </S.Header>

      <S.Body>
        <S.List>
          <EmptyCard />
        </S.List>
      </S.Body>
    </S.Group>
  );
}
