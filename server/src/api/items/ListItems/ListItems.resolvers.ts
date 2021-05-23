import { getManager, getRepository } from 'typeorm';
import { ListItemsQueryArgs, ListItemsResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import Item from '../../../entities/Item';

const resolvers: Resolvers = {
  Query: {
    ListItems: adminResolver(
      async (_, args: ListItemsQueryArgs): Promise<ListItemsResponse> => {
        const { name, divide, native, cursor } = args;

        try {
          const query = await getManager()
            .createQueryBuilder(Item, 'item')
            .limit(20)
            .orderBy('item.num', 'DESC');

          if (name) {
            query.andWhere('item.name like :name', {
              name: `%${name}%`,
            });
          }

          if (divide) {
            query.andWhere('item.divide like :divide', {
              divide: `%${divide}%`,
            });
          }

          if (native) {
            query.andWhere('item.native like :native', {
              native: `%${native}%`,
            });
          }

          if (cursor) {
            const item = await getRepository(Item).findOne({ id: cursor });

            if (!item) {
              return {
                ok: false,
                error: 'Bad Request',
                items: null,
              };
            }

            query.andWhere('item.num < :num', {
              num: item.num,
            });
          }

          const items = await query.getMany();

          return {
            ok: true,
            error: null,
            items,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            items: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
