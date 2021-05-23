import { Context } from 'vm';
import { MeResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { authResolver } from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    Me: authResolver(
      async (_, __, { ctx }: { ctx: Context }): Promise<MeResponse> => {
        const { user_id, username, admin } = ctx.state.user;

        if (
          user_id === undefined ||
          username === undefined ||
          admin === undefined
        ) {
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
              user_id,
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
