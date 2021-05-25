import { Context } from 'koa';
import { getRepository } from 'typeorm';
import { AddWeddingMutationArgs, AddWeddingResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import { masking } from '../../../libs/utils';
import Wedding from '../../../entities/Wedding';

const resolvers: Resolvers = {
  Mutation: {
    AddWedding: adminResolver(
      async (
        _,
        args: AddWeddingMutationArgs,
        { ctx }: { ctx: Context }
      ): Promise<AddWeddingResponse> => {
        const { user_id } = ctx.state.user;

        try {
          const wedding = await getRepository(Wedding).create({
            ...args,
            husband: masking(args.husband),
            bride: masking(args.bride),
            user_id,
          });

          await wedding.save();

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
