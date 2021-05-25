import { getRepository } from 'typeorm';
import { AddItemMutationArgs, AddItemResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import Item from '../../../entities/Item';

const resolvers: Resolvers = {
  Mutation: {
    AddItem: adminResolver(
      async (_, args: AddItemMutationArgs): Promise<AddItemResponse> => {
        try {
          const itemCount = await getRepository(Item).count();
          const item = await getRepository(Item).create({
            ...args,
            num: itemCount + 1,
          });

          await item.save();

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
