import { Context } from 'vm';
import { MeResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { authResolver } from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    Me: authResolver(
      async (_, __, { ctx }: { ctx: Context }): Promise<MeResponse> => {
        const { id, username, admin } = ctx.state.user;

        if (id === undefined || username === undefined || admin === undefined) {
          return {
            ok: false,
            error: 'unhandled User',
            me: null,
          };
        } else {
          return {
            ok: true,
            error: null,
            me: {
              id,
              username,
              admin,
            },
          };
        }
      }
    ),
  },
};

export default resolvers;
