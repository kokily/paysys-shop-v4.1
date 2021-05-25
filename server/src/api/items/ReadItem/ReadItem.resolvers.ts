import { getRepository } from 'typeorm';
import { ReadItemQueryArgs, ReadItemResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import Item from '../../../entities/Item';

const resolvers: Resolvers = {
  Query: {
    ReadItem: adminResolver(
      async (_, args: ReadItemQueryArgs): Promise<ReadItemResponse> => {
        const { id } = args;

        try {
          const item = await getRepository(Item).findOne(id);

          if (!item) {
            return {
              ok: false,
              error: 'Does not exist item',
              item: null,
            };
          }

          return {
            ok: true,
            error: null,
            item,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            item: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
