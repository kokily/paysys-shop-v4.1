import { getRepository } from 'typeorm';
import { SetEmployeeMutationArgs, SetEmployeeResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Mutation: {
    SetEmployee: adminResolver(
      async (
        _,
        args: SetEmployeeMutationArgs
      ): Promise<SetEmployeeResponse> => {
        const { id } = args;

        try {
          await getRepository(User).update({ id }, { admin: false });

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
