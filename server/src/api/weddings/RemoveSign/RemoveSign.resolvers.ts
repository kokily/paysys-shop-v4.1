import { getRepository } from 'typeorm';
import { RemoveSignMutationArgs, RemoveSignResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import Wedding from '../../../entities/Wedding';

const resolvers: Resolvers = {
  Mutation: {
    RemoveSign: adminResolver(
      async (_, args: RemoveSignMutationArgs): Promise<RemoveSignResponse> => {
        const { weddingId } = args;

        try {
          await getRepository(Wedding).update(
            { id: weddingId },
            {
              husband_image: '',
              bride_image: '',
            }
          );

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
