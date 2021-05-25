import { Context } from 'koa';
import { getManager, getRepository } from 'typeorm';
import aligoapi from 'aligoapi';
import { AddBillMutationArgs, AddBillResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { authResolver } from '../../../libs/authenticate';
import Bill from '../../../entities/Bill';
import Cart from '../../../entities/Cart';

const resolvers: Resolvers = {
  Mutation: {
    AddBill: authResolver(
      async (
        _,
        args: AddBillMutationArgs,
        { ctx }: { ctx: Context }
      ): Promise<AddBillResponse> => {
        const { id, username } = ctx.state.user;

        try {
          const query = await getManager()
            .createQueryBuilder(Cart, 'cart')
            .where('cart.user_id = :id', { id })
            .andWhere('cart.completed = false')
            .andWhere('cart.deleted = false');
          const cart = await query.getOne();

          if (!cart) {
            return {
              ok: false,
              error: '카트가 존재하지 않습니다.',
            };
          }

          let input_cart = { ...cart };
          let total = 0;

          input_cart.items.map((item) => {
            return (total += item.amount);
          });

          const bill = await getRepository(Bill).create({
            ...args,
            username,
            user_id: id,
            cart_id: input_cart.id,
            total_amount: total,
            items: input_cart.items,
          });

          await bill.save();

          let update_cart = { ...cart, completed: true };

          await getRepository(Cart).update({ id: cart.id }, { ...update_cart });

          const sms_config = {
            key: process.env.ALIGO_KEY,
            user_id: process.env.ALIGO_USER,
          };

          const sender = process.env.ALIGO_SENDER;
          const receiver =
            process.env.NODE_ENV === 'production'
              ? `${process.env.ALIGO_RECEIVER1},${process.env.ALIGO_RECEIVER2},${process.env.ALIGO_RECEIVER3},${process.env.ALIGO_RECEIVER4}`
              : `${process.env.ALIGO_RECEIVER1}`;

          ctx.request.body = {
            sender,
            receiver,
            msg: `[${username}]님 [${args.hall}]에서 [${args.title}] 전표전송 https://paysys.shop/fronts `,
          };

          aligoapi
            .send(ctx.request, sms_config)
            .then((r) => console.log(r))
            .catch((err) => console.error(err));

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
