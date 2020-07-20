import { StudentCreateInterface, CourseCreateInterface, EnrollCourseInterface } from "../../interfaces/modelInterfaces";
import models from "../../models";

export const mutationResolvers = {
    Mutation: {
        // student's mutation resolvers
        createStudent: async (_: any, args: StudentCreateInterface) => {
          const result = await models.student.insertStudent({
            id: args.id,
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            username: args.username,
            password: args.password,
          });
          const success = true;
          const message = "student Created Successfully";
          const student = {
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            username: args.username,
            password: args.password,
          };
          return { student, success, message };
        },
    
        deleteStudent: async (_: any, { id }: { id: number }) => {
          const student = await models.student.findById(id);
    
          if (!student) {
            const success = false;
            const message = "student not Found";
            return { message, success };
          } else {
            await models.student.deleteStudent(id);
            const success = true;
            const message = "Deleted Successfully";
            return { message, success, student };
          }
        },
    
        updateStudent: async (
          _: any,
          {
            id,
            firstName,
            lastName,
            email,
            password,
            username,
          }: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            username: string;
          }
        ) => {
          const student = await models.student.findById(id);
    
          if (!student) {
            const success = false;
            const message = "student not Found";
            return { message, success };
          } else {
            await models.student.updateStudent(id, {
              firstName,
              lastName,
              email,
              password,
              username,
            });
    
            const success = true;
            const message = "Updated Successfully";
            return { message, success, student };
          }
        },
    
        // courses mutations resolver
        createCourse: async (_: any, args: CourseCreateInterface) => {
          const result = await models.course.insertCourse({
            title: args.title,
            description: args.description,
            ratings: args.ratings,
          });
          const success = true;
          const message = "course Created Successfully";
          const course = {
            title: args.title,
            description: args.description,
            ratings: args.ratings,
          };
          return { course, success, message };
        },
    
        updateCourse: async (
          _: any,
          {
            id,
            title,
            description,
            ratings,
          }: {
            id: number;
            title: string;
            description: string;
            ratings: number;
          }
        ) => {
          const course = await models.course.findById(id);
    
          if (!course) {
            const success = false;
            const message = "course not Found";
            return { message, success };
          } else {
            await models.course.updateCourse(id, {
              id,
              title,
              description,
              ratings,
            });
    
            const success = true;
            const message = "Updated Successfully";
            return { message, success, course };
          }
        },
    
        deleteCourse: async (_: any, { id }: { id: number }) => {
          const course = await models.course.findById(id);
    
          if (!course) {
            const success = false;
            const message = "course not Found";
            return { message, success };
          } else {
            await models.course.deleteCourse(id);
            const success = true;
            const message = "Deleted Successfully";
            return { message, success, course };
          }
        },
    
        createStudentCourses: async (_: any, args: EnrollCourseInterface) => {
          const result = await models.studentCourse.enrollCourse({
            student_id: args.student_id,
            course_id: args.course_id,
          });
          const success = true;
          const message = "course enrolled Successfully";
          return { success, message };
        },
        
      },
}