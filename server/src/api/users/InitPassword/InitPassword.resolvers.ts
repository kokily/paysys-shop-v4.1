import { getRepository } from 'typeorm';
import {
  InitPasswordMutationArgs,
  InitPasswordResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Mutation: {
    InitPassword: adminResolver(
      async (
        _,
        args: InitPasswordMutationArgs
      ): Promise<InitPasswordResponse> => {
        const { id } = args;

        try {
          const user = await getRepository(User).findOne(id);

          if (!user) {
            return {
              ok: false,
              error: 'Does not exist User',
            };
          }

          await user.setPassword(process.env.BASE_PASSWORD!);
          await user.save();

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
