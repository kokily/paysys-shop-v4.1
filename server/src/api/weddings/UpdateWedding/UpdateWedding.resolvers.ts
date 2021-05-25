import { getRepository } from 'typeorm';
import {
  UpdateWeddingMutationArgs,
  UpdateWeddingResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import { cleanAllNullArgs } from '../../../libs/utils';
import Wedding from '../../../entities/Wedding';

const resolvers: Resolvers = {
  Mutation: {
    UpdateWedding: adminResolver(
      async (
        _,
        args: UpdateWeddingMutationArgs
      ): Promise<UpdateWeddingResponse> => {
        const { id } = args;

        try {
          const notNull = cleanAllNullArgs(args);

          await getRepository(Wedding).update(
            {
              id,
            },
            {
              ...notNull,
              updated_at: new Date(),
            }
          );

          const wedding = await getRepository(Wedding).findOne(id);

          if (!wedding) {
            return {
              ok: false,
              error: 'Does not Exist',
              wedding: null,
            };
          }

          return {
            ok: true,
            error: null,
            wedding,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            wedding: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
