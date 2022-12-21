import { ICard } from '../../components/elements/Card';

export function formatList(list: ICard[]) {
  const ToDo = list.filter((card) => card.lista === 'ToDo');
  const Doing = list.filter((card) => card.lista === 'Doing');
  const Done = list.filter((card) => card.lista === 'Done');

  return {
    ToDo,
    Doing,
    Done,
  };
}
