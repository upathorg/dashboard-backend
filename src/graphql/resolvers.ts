import { studentResolvers } from "./resolvers/studentResolvers";
import { mutationResolvers } from "./resolvers/mutationResolvers";
import { courseResolvers } from "./resolvers/courseResolvers";


export const resolvers = [
  studentResolvers,
  mutationResolvers,
  courseResolvers
]
