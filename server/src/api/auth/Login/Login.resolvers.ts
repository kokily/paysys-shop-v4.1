import { getRepository } from 'typeorm';
import { LoginMutationArgs, LoginResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Mutation: {
    Login: async (_, args: LoginMutationArgs): Promise<LoginResponse> => {
      const { username, password } = args;

      try {
        const user = await getRepository(User).findOne({ username });

        if (!user) {
          return {
            ok: false,
            error: 'Does not exist user',
            token: null,
          };
        }

        const valid = await user.validPassword(password);

        if (!valid) {
          return {
            ok: false,
            error: 'Invalid password',
            token: null,
          };
        }

        const token = user.generateToken();

        return {
          ok: true,
          error: null,
          token,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          token: null,
        };
      }
    },
  },
};

export default resolvers;
