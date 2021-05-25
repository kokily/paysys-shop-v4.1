import { getRepository } from 'typeorm';
import { RemoveItemMutationArgs, RemoveItemResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import Item from '../../../entities/Item';

const resolvers: Resolvers = {
  Mutation: {
    RemoveItem: adminResolver(
      async (_, args: RemoveItemMutationArgs): Promise<RemoveItemResponse> => {
        const { id } = args;

        try {
          await getRepository(Item).delete(id);

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
