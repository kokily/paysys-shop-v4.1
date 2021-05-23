import { getRepository } from 'typeorm';
import { RegisterMutationArgs, RegisterResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import User from '../../../entities/User';

const resolvers: Resolvers = {
  Mutation: {
    Register: async (
      _,
      args: RegisterMutationArgs
    ): Promise<RegisterResponse> => {
      const { username, password } = args;
      let admin = false;

      try {
        const exist = await getRepository(User).findOne({ username });

        if (exist) {
          return {
            ok: false,
            error: 'Exist username',
          };
        }

        if (
          username === process.env.ADMIN_NAME1 ||
          username === process.env.ADMIN_NAME2 ||
          username === process.env.ADMIN_NAME3 ||
          username === process.env.ADMIN_NAME4
        ) {
          admin = true;
        }

        const user = await getRepository(User).create({
          ...args,
          admin,
        });

        await user.setPassword(password);
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
    },
  },
};

export default resolvers;
