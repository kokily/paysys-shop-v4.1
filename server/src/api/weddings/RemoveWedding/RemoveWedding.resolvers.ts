import { getRepository } from 'typeorm';
import {
  RemoveWeddingMutationArgs,
  RemoveWeddingResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { adminResolver } from '../../../libs/authenticate';
import Wedding from '../../../entities/Wedding';
import Company from '../../../entities/Wedding/Company';
import Convention from '../../../entities/Wedding/Convention';
import Event from '../../../entities/Wedding/Event';
import Hanbok from '../../../entities/Wedding/Hanbok';
import Meal from '../../../entities/Wedding/Meal';
import Present from '../../../entities/Wedding/Present';
import Reserve from '../../../entities/Wedding/Reserve';

const resolvers: Resolvers = {
  Mutation: {
    RemoveWedding: adminResolver(
      async (
        _,
        args: RemoveWeddingMutationArgs
      ): Promise<RemoveWeddingResponse> => {
        const { id } = args;

        try {
          await getRepository(Wedding).delete(id);
          await getRepository(Company).delete({ weddingId: id });
          await getRepository(Convention).delete({ weddingId: id });
          await getRepository(Event).delete({ weddingId: id });
          await getRepository(Hanbok).delete({ weddingId: id });
          await getRepository(Meal).delete({ weddingId: id });
          await getRepository(Present).delete({ weddingId: id });
          await getRepository(Reserve).delete({ weddingId: id });

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
