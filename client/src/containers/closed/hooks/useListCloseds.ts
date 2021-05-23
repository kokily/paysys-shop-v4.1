import { useCallback, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LIST_CLOSEDS } from '../../../libs/graphql/closeds';
import useScroll from '../../../libs/hooks/useScroll';

function useListCloseds() {
  const { data, loading, error, fetchMore, refetch } = useQuery<{
    ListCloseds: { closeds: ClosedType[] };
  }>(LIST_CLOSEDS, {
    fetchPolicy: 'network-only',
  });
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (cursor: string) => {
      fetchMore({
        variables: { cursor },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (fetchMoreResult.ListCloseds.closeds.length === 0) {
            setIsFinished(true);
          }

          return {
            ListCloseds: {
              ...prev.ListCloseds,
              closeds: [
                ...prev.ListCloseds.closeds,
                ...fetchMoreResult.ListCloseds.closeds,
              ],
            },
          };
        },
      });
    },
    [fetchMore]
  );

  const cursor =
    data?.ListCloseds.closeds[data.ListCloseds.closeds.length - 1]?.id;

  useScroll({
    cursor,
    onLoadMore,
  });

  return { data, loading, error, isFinished, refetch };
}

export default useListCloseds;
