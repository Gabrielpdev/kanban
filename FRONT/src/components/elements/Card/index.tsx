import * as S from './styles';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useEffect, useRef, useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillXCircleFill,
  BsPatchCheckFill,
  BsPencilSquare,
  BsTrashFill,
} from 'react-icons/bs';
import { api } from '../../../service/api';
import { toast } from 'react-toastify';
import { onRefetchList } from '../../../service/queries/list';

export type ICard = {
  id: string;
  titulo?: string | null;
  conteudo?: string | null;
  lista: string;
};

interface CardProps {
  defaultCard: ICard;
}

export function Card({ defaultCard }: CardProps) {
  const [card, setCard] = useState(defaultCard);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  async function handleNext() {
    await api.put(`/cards/${card.id}`, {
      ...card,
      lista: card.lista === 'ToDo' ? 'Doing' : 'Done',
    });

    onRefetchList();
  }

  async function handlePrev() {
    await api.put(`/cards/${card.id}`, {
      ...card,
      lista: card.lista === 'Doing' ? 'ToDo' : 'Doing',
    });

    onRefetchList();
  }

  async function toggleIsEditing() {
    if (isEditing === true) {
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

      setCard({
        ...card,
        conteudo: newContent,
        titulo: newTitle,
      });

      await api.put(`/cards/${defaultCard.id}`, {
        ...card,
        conteudo: newContent,
        titulo: newTitle,
      });

      setIsEditing(false);
      return;
    }

    setIsEditing(true);
  }

  async function handleDelete() {
    await api.delete(`/cards/${card.id}`, {
      data: {
        id: card.id,
      },
    });

    onRefetchList();
    toast.success('Card excluido com sucesso !');
  }

  async function handleCancel() {
    setCard(defaultCard);
    setIsEditing(false);
  }

  useEffect(() => {
    const html = marked.parse(card.conteudo ?? '');
    const clean = DOMPurify?.sanitize(html, {
      USE_PROFILES: { html: true },
    });

    setContent(clean);
  }, [card]);

  return (
    <S.Card>
      {isEditing ? (
        <>
          <S.LabelTitle>
            Título
            <input
              ref={titleRef}
              data-testid="titulo"
              type="text"
              defaultValue={card?.titulo ?? ''}
            />
          </S.LabelTitle>

          <S.LabelContent>
            Conteúdo (MarkDown)
            <textarea
              data-testid="conteudo"
              ref={contentRef}
              defaultValue={card.conteudo ?? ''}
            />
          </S.LabelContent>
        </>
      ) : (
        <>
          <S.Title data-testid="titulo">{card?.titulo}</S.Title>
          <S.Content
            data-testid="conteudo"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </>
      )}

      <S.Footer>
        {defaultCard.lista !== 'ToDo' ? (
          <S.Arrow onClick={handlePrev}>
            <BsFillArrowLeftCircleFill size={15} />{' '}
          </S.Arrow>
        ) : (
          <div style={{ width: 20 }} />
        )}

        <S.Delete
          data-testid="cancelar"
          onClick={isEditing ? handleCancel : handleDelete}
        >
          {isEditing ? (
            <>
              CANCELAR <BsFillXCircleFill size={15} />{' '}
            </>
          ) : (
            <>
              DELETAR <BsTrashFill size={15} />{' '}
            </>
          )}
        </S.Delete>

        <S.Edit data-testid="salvar" onClick={toggleIsEditing}>
          {isEditing ? (
            <>
              SALVAR <BsPatchCheckFill size={15} />{' '}
            </>
          ) : (
            <>
              EDITAR <BsPencilSquare size={15} />{' '}
            </>
          )}
        </S.Edit>

        {defaultCard.lista !== 'Done' ? (
          <S.Arrow onClick={handleNext}>
            <BsFillArrowRightCircleFill size={15} />{' '}
          </S.Arrow>
        ) : (
          <div style={{ width: 20 }} />
        )}
      </S.Footer>
    </S.Card>
  );
}
