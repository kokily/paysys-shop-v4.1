import { getManager, getRepository } from 'typeorm';
import { ListUsersQueryArgs, ListUsersResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Query: {
    ListUsers: adminResolver(
      async (_, args: ListUsersQueryArgs): Promise<ListUsersResponse> => {
        const { username, cursor } = args;

        try {
          const query = await getManager()
            .createQueryBuilder(User, 'users')
            .limit(30)
            .orderBy('users.created_at', 'DESC')
            .addOrderBy('users.id', 'DESC');

          if (username) {
            query.andWhere('users.username like :username', {
              username: `%${username}%`,
            });
          }

          if (cursor) {
            const user = await getRepository(User).findOne({ id: cursor });

            if (!user) {
              return {
                ok: false,
                error: 'Bad Request',
                users: null,
              };
            }

            query.andWhere('users.created_at < :date', {
              date: user.created_at,
            });

            query.orWhere('users.created_at = :date AND users.id < :id', {
              date: user.created_at,
              id: user.id,
            });
          }

          const users = await query.getMany();

          return {
            ok: true,
            error: null,
            users,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            users: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
