import { useQuery } from 'react-query';
import { ICard } from '../../components/elements/Card';
import { formatList } from '../../helpers/functions/formatList';
import { queryClient } from '../../helpers/queries/querieClient';
import { api } from '../api';

export const useListQuery = () => {
  return useQuery({
    queryKey: ['list'],
    queryFn: () => onFetch(),
    staleTime: 1000 * 60 * 30, // 30 min
  });
};

export async function onRefetchList() {
  return await queryClient.invalidateQueries('list');
}

const onFetch = async () => {
  try {
    const { data } = await api.get<ICard[]>('/cards');

    const formattedList = formatList(data);

    return formattedList;
  } catch (err) {
    console.log(err);
    return null;
  }
};
