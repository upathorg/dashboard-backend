import models from "../models";
import { UserQueryInterface } from "../interfaces/modelInterfaces";
import { title } from "process";

export const resolvers = {
  Query: {
    users: async () => {
      const users = await models.user.all();
      return users;
    },

    user: async (_: any, { id }: { id: number }) => {
      const user = await models.user.findById(id);
      return user;
    },
  },

  Mutation: {
    createUser: async (root: any, args: UserQueryInterface) => {
      const result = await models.user.insertUser([
        {
          id: args.id,
          first_name: args.first_name,
          last_name: args.last_name,
          email: args.email,
          username: args.username,
          password: args.password
        },
      ]);

      const newuser = {
        first_name: args.first_name,
        last_name: args.last_name,
        email: args.email,
        username: args.username,
        password: args.password
      };
      return newuser;
    },
  },
};
