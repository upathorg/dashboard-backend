import { studentResolvers } from "./resolvers/studentResolvers";
import { mutationResolvers } from "./resolvers/mutationResolvers";
import { courseResolvers } from "./resolvers/courseResolvers";
import { InstructorResolvers } from "./resolvers/instructorResolvers";


export const resolvers = [
  studentResolvers,
  mutationResolvers,
  courseResolvers,
  InstructorResolvers
]
