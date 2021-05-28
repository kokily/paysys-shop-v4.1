import { getRepository } from 'typeorm';
import { ReadWeddingQueryArgs, ReadWeddingResponse } from '../../../@types';
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
  Query: {
    ReadWedding: adminResolver(
      async (_, args: ReadWeddingQueryArgs): Promise<ReadWeddingResponse> => {
        const { id } = args;

        try {
          const wedding = await getRepository(Wedding).findOne(id);
          const company = await getRepository(Company).findOne({
            weddingId: id,
          });
          const convention = await getRepository(Convention).findOne({
            weddingId: id,
          });
          const event = await getRepository(Event).findOne({
            weddingId: id,
          });
          const hanbok = await getRepository(Hanbok).findOne({
            weddingId: id,
          });
          const meal = await getRepository(Meal).findOne({
            weddingId: id,
          });
          const present = await getRepository(Present).findOne({
            weddingId: id,
          });
          const reserve = await getRepository(Reserve).findOne({
            weddingId: id,
          });

          if (
            !wedding ||
            !company ||
            !convention ||
            !event ||
            !hanbok ||
            !meal ||
            !present ||
            !reserve
          ) {
            return {
              ok: false,
              error: '데이터가 없음',
              wedding: null,
              company: null,
              convention: null,
              event: null,
              hanbok: null,
              meal: null,
              present: null,
              reserve: null,
            };
          }

          return {
            ok: true,
            error: null,
            wedding,
            company,
            convention,
            event,
            hanbok,
            meal,
            present,
            reserve,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            wedding: null,
            company: null,
            convention: null,
            event: null,
            hanbok: null,
            meal: null,
            present: null,
            reserve: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
