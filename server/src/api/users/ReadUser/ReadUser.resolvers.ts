import { getRepository } from 'typeorm';
import { ReadUserQueryArgs, ReadUserResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Query: {
    ReadUser: adminResolver(
      async (_, args: ReadUserQueryArgs): Promise<ReadUserResponse> => {
        const { id } = args;

        try {
          const user = await getRepository(User).findOne(id);

          if (!user) {
            return {
              ok: false,
              error: 'Does not exist user',
              user: null,
            };
          }

          return {
            ok: true,
            error: null,
            user,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            user: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
