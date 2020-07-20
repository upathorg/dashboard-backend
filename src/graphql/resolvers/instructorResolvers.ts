import models from "../../models";

export const InstructorResolvers = {

    // resolver to get data from the database for fields specific to course schema
    Instructor: {
        courses: async (instructor: any) => {
            const courses = await models.course.find({'instructor_id': instructor.id});
            return courses;
            
           
        }
    },


    Query: {
        instructor: async (_: any, { id }: { id: number }) => {
          const instructor = await models.instructor.findById(id);
          return instructor
        },
    
        instructors: async () => {
          const instructors = await models.instructor.all();
          return instructors;
        },
      },
}