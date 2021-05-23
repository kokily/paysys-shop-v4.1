import { getRepository } from 'typeorm';
import { ReadClosedQueryArgs, ReadClosedResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import Closed from '../../../entities/Closed';

const resolvers: Resolvers = {
  Query: {
    ReadClosed: async (
      _,
      args: ReadClosedQueryArgs
    ): Promise<ReadClosedResponse> => {
      const { id } = args;

      try {
        const closed = await getRepository(Closed).findOne(
          { id },
          { relations: ['closed_users'] }
        );

        if (!closed) {
          return {
            ok: false,
            error: '일치하는 휴업현황이 없습니다.',
            closed: null,
          };
        }

        return {
          ok: true,
          error: null,
          closed,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          closed: null,
        };
      }
    },
  },
};

export default resolvers;
