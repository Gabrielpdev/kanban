import { Card, ICard } from '../../elements/Card';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import * as S from './styles';
import { Spinner } from '../../elements/Spinner';

type IGroup = {
  title: string;
  list?: ICard[];
};

interface GroupProps {
  data: IGroup;
  isLoading: boolean;
}

export function Group({ data, isLoading }: GroupProps) {
  return (
    <Droppable droppableId={data.title.replace(' ', '')}>
      {(provided) => (
        <S.Group typeData={data.title}>
          <S.Header>
            <S.Title>{data.title}</S.Title>
          </S.Header>

          {isLoading ? (
            <S.LoadingContainer>
              <Spinner size="md" />
            </S.LoadingContainer>
          ) : (
            <S.Body>
              <S.List ref={provided.innerRef} {...provided.droppableProps}>
                {data?.list?.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card defaultCard={card} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </S.List>
            </S.Body>
          )}
        </S.Group>
      )}
    </Droppable>
  );
}
