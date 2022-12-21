import { Group } from '../../components/modules/Group';
import * as S from './styles';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { NewGroup } from '../../components/modules/NewGroup';
import { useListQuery } from '../../service/queries/list';
import { api } from '../../service/api';
import { ToggleTheme } from '../../components/elements/ToggleTheme';

type IKeyList = 'ToDo' | 'Done' | 'Doing';

export function Home() {
  const { data: list, isLoading } = useListQuery();

  async function onDragEnd({ source, destination, draggableId }: DropResult) {
    if (!destination || !list) return;

    const sourceCol = list[source.droppableId as IKeyList];
    const card = sourceCol.find((card) => card.id === draggableId);
    const destinationCol = list[destination.droppableId as IKeyList];

    if (
      destination.index !== source.index ||
      destination.droppableId !== source.droppableId
    ) {
      const [removed] = sourceCol.splice(source.index, 1);
      destinationCol.splice(destination.index, 0, {
        ...removed,
        lista: destination.droppableId as IKeyList,
      });
      list[source.droppableId as IKeyList] = sourceCol;
      list[destination.droppableId as IKeyList] = destinationCol;
    }

    await api.put(`/cards/${draggableId}`, {
      ...card,
      lista: destination.droppableId,
    });
  }

  return (
    <S.Wrapper>
      <S.Title>KANBAN</S.Title>

      <ToggleTheme />
      <S.Container>
        <NewGroup />
        <DragDropContext onDragEnd={onDragEnd}>
          <Group
            isLoading={isLoading}
            data={{
              title: 'To Do',
              list: list?.ToDo,
            }}
          />
          <Group
            isLoading={isLoading}
            data={{
              title: 'Doing',
              list: list?.Doing,
            }}
          />
          <Group
            isLoading={isLoading}
            data={{
              title: 'Done',
              list: list?.Done,
            }}
          />
        </DragDropContext>
      </S.Container>
    </S.Wrapper>
  );
}
