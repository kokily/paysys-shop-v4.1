import { getRepository } from 'typeorm';
import { SetAdminMutationArgs, SetAdminResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Mutation: {
    SetAdmin: adminResolver(
      async (_, args: SetAdminMutationArgs): Promise<SetAdminResponse> => {
        const { id } = args;

        try {
          await getRepository(User).update({ id }, { admin: true });

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
