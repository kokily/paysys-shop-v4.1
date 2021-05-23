import { getRepository } from 'typeorm';
import { AddClosedMutationArgs, AddClosedResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { masking } from '../../../libs/utils';
import Closed from '../../../entities/Closed';
import ClosedUser from '../../../entities/ClosedUser';

const resolvers: Resolvers = {
  Mutation: {
    AddClosed: async (
      _,
      args: AddClosedMutationArgs
    ): Promise<AddClosedResponse> => {
      const { year, month, users } = args;

      try {
        const closed = await getRepository(Closed).create({ year, month });

        await closed.save();

        const updateUsers = users.map((user) => ({
          ...user,
          username: masking(user.username),
          closedId: closed.id,
        }));

        await getRepository(ClosedUser).save(updateUsers);

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
