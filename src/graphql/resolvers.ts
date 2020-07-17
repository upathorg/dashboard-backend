import models from "../models";
import {
  UserQueryInterface,
  UserUpdateInterface,
} from "../interfaces/modelInterfaces";
import { title } from "process";

export const resolvers = {
  Query: {
    users: async () => {
      const users = await models.user.all();
      return users;
    },

    user: async (root: any, { id }: { id: number }) => {
      const user = await models.user.findById(id);
      return user;
    },
  },

  Mutation: {
    createUser: async (root: any, args: UserQueryInterface) => {
      await models.user.insertUser(
        {
          id: args.id,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          username: args.username,
          password: args.password,
        },
      );

      const success = true;
      const message = "User Created Successfully";

      const newuser = {
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        username: args.username,
        password: args.password,
      };
      return {newuser, success, message};
    },

    deleteUser: async (root: any, { id }: { id: number }) => {
      const user = await models.user.findById(id);

      if (!user) {
        const success = false;
        const message = "User not Found";
        return { message, success };
      } else {
        await models.user.deleteUser(id);
        const success = true;
        const message = "Deleted Successfully";
        return { message, success, user };
      }
    },

    updateUser: async (
      root: any,
      {
        id,
        firstName,
        lastName,
        email,
        password,
        username
      }: { id: number; firstName: string; lastName: string, email: string, password: string, username: string}
    ) => {
      const user = await models.user.findById(id);

      if (!user) {
        const success = false;
        const message = "User not Found";
        return { message, success };
      } else {
        await models.user.updateUser(id, {firstName, lastName, email, password, username})

        const success = true;
        const message = "Updated Successfully";
        return { message, success, user };
      }
    },
  },
};
