import { getManager, getRepository } from 'typeorm';
import { ListClosedsQueryArgs, ListClosedsResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import Closed from '../../../entities/Closed';

const resolvers: Resolvers = {
  Query: {
    ListCloseds: async (
      _,
      args: ListClosedsQueryArgs
    ): Promise<ListClosedsResponse> => {
      const { cursor } = args;

      try {
        const query = await getManager()
          .createQueryBuilder(Closed, 'closeds')
          .limit(15)
          .orderBy('closeds.created_at', 'DESC');

        if (cursor) {
          const closed = await getRepository(Closed).findOne({ id: cursor });

          if (!closed) {
            return {
              ok: false,
              error: '일치하는 휴업현황이 없습니다.',
              closeds: null,
            };
          }

          query.andWhere('closeds.created_at < :date', {
            date: closed.created_at,
          });

          query.orWhere('closeds.created_at = :date AND closeds.id < :id', {
            date: closed.created_at,
            id: closed.id,
          });
        }

        const closeds = await query.getMany();

        return {
          ok: true,
          error: null,
          closeds,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          closeds: null,
        };
      }
    },
  },
};

export default resolvers;
