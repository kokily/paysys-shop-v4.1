import { getManager, getRepository } from 'typeorm';
import { ReadClosedQueryArgs, ReadClosedResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import Closed from '../../../entities/Closed';
import ClosedUser from '../../../entities/ClosedUser';

const resolvers: Resolvers = {
  Query: {
    ReadClosed: async (
      _,
      args: ReadClosedQueryArgs
    ): Promise<ReadClosedResponse> => {
      const { id } = args;

      try {
        const closed = await getRepository(Closed).findOne(id);
        const query = await getManager()
          .createQueryBuilder(ClosedUser, 'closed_users')
          .where('closed_users.closedId = :id', { id });

        const closed_users = await query.getMany();

        if (!closed) {
          return {
            ok: false,
            error: '일치하는 휴업현황이 없습니다.',
            closed: null,
            closed_users: null,
          };
        }

        return {
          ok: true,
          error: null,
          closed,
          closed_users,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          closed: null,
          closed_users: null,
        };
      }
    },
  },
};

export default resolvers;
