import * as S from './styles';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useRef } from 'react';
import { api } from '../../../service/api';
import { toast } from 'react-toastify';
import { onRefetchList } from '../../../service/queries/list';

export function EmptyCard() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  async function handleAddNewCard() {
    const newContent = contentRef?.current?.value;
    const newTitle = titleRef?.current?.value;

    if (!newTitle) {
      toast.error('Titulo vazio');
      return;
    }

    if (!newContent) {
      toast.error('Conteudo vazio');
      return;
    }

    await api.post('/cards', {
      titulo: newTitle,
      conteudo: newContent,
      lista: 'ToDo',
    });

    onRefetchList();
    contentRef.current.value = '';
    titleRef.current.value = '';
  }

  return (
    <S.Card>
      <S.Title>
        Título
        <input ref={titleRef} type="text" />
      </S.Title>
      <S.Content>
        Conteúdo (MarkDown)
        <textarea ref={contentRef} />
      </S.Content>

      <S.Footer>
        <button onClick={handleAddNewCard}>
          SALVAR
          <BsPlusCircleFill size={20} />
        </button>
      </S.Footer>
    </S.Card>
  );
}
