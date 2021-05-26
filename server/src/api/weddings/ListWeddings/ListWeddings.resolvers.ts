import { getManager, getRepository } from 'typeorm';
import { ListWeddingsQueryArgs, ListWeddingsResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import Wedding from '../../../entities/Wedding';

const resolvers: Resolvers = {
  Query: {
    ListWeddings: adminResolver(
      async (_, args: ListWeddingsQueryArgs): Promise<ListWeddingsResponse> => {
        const { date, cursor } = args;

        try {
          const query = await getManager()
            .createQueryBuilder(Wedding, 'weddings')
            .limit(20)
            .orderBy('weddings.created_at', 'DESC')
            .addOrderBy('weddings.id', 'DESC');

          if (date) {
            query.andWhere('weddings.created_at like :date', {
              date: `%${date}%`,
            });
          }

          if (cursor) {
            const wedding = await getRepository(Wedding).findOne({
              id: cursor,
            });

            if (!wedding) {
              return {
                ok: false,
                error: 'Bad Request',
                weddings: null,
              };
            }

            query.andWhere('weddings.created_at < :date', {
              date: wedding.created_at,
            });

            query.orWhere('weddings.created_at = :date AND weddings.id < :id', {
              date: wedding.created_at,
              id: wedding.id,
            });
          }

          const weddings = await query.getMany();

          return {
            ok: true,
            error: null,
            weddings,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            weddings: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
