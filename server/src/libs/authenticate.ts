import { Context } from 'koa';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import User from '../entities/User';

async function decodeToken(token: string): Promise<User | undefined> {
  const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
  const user = await getRepository(User).findOne({ id: decoded.id });

  if (user) {
    return user;
  } else {
    return undefined;
  }
}

export const adminResovler =
  (resolverFunction) => async (parent, args, context, info) => {
    const { ctx }: { ctx: Context } = context;
    const token = ctx.req.headers['authorization'];

    if (!token) {
      throw new Error('Not Authenticated');
    }

    try {
      const user = await decodeToken(token.split(' ')[1]);

      if (user && user.admin) {
        ctx.state.user = {
          user_id: user.id,
          username: user.username,
          admin: user.admin,
        };
      } else {
        ctx.state.user = undefined;
      }
    } catch (err) {
      throw new Error(err);
    }

    const resolved = await resolverFunction(parent, args, context, info);

    return resolved;
  };

export const authResolver =
  (resolverFunction) => async (parent, args, context, info) => {
    const { ctx }: { ctx: Context } = context;
    const token = ctx.req.headers['authorization'];

    if (!token) {
      throw new Error('Not Authenticated');
    }

    try {
      const user = await decodeToken(token.split(' ')[1]);

      if (user) {
        ctx.state.user = {
          user_id: user.id,
          username: user.username,
          admin: user.admin,
        };
      } else {
        ctx.state.user = undefined;
      }
    } catch (err) {
      throw new Error(err);
    }

    const resolved = await resolverFunction(parent, args, context, info);

    return resolved;
  };
