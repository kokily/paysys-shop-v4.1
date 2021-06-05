import { getRepository } from 'typeorm';
import { AddSignMutationArgs, AddSignResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import Wedding from '../../../entities/Wedding';

const resolvers: Resolvers = {
  Mutation: {
    AddSign: adminResolver(
      async (_, args: AddSignMutationArgs): Promise<AddSignResponse> => {
        const { weddingId, sex, image } = args;

        try {
          if (sex === 'husband') {
            await getRepository(Wedding).update(
              { id: weddingId },
              {
                husband_image: image,
              }
            );

            return {
              ok: true,
              error: null,
            };
          } else {
            await getRepository(Wedding).update(
              { id: weddingId },
              {
                bride_image: image,
              }
            );

            return {
              ok: true,
              error: null,
            };
          }
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
