import { getRepository } from 'typeorm';
import { UpdateItemMutationArgs, UpdateItemResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import { cleanAllNullArgs } from '../../../libs/utils';
import Item from '../../../entities/Item';

const resolvers: Resolvers = {
  Mutation: {
    UpdateItem: adminResolver(
      async (_, args: UpdateItemMutationArgs): Promise<UpdateItemResponse> => {
        const { id } = args;

        try {
          const notNull = cleanAllNullArgs(args);

          await getRepository(Item).update(
            { id },
            { ...notNull, updated_at: new Date() }
          );

          return {
            ok: true,
            error: null,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
