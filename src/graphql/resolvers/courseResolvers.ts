import models from "../../models";

export const courseResolvers = {

    // resolver to get data from the database for fields specific to course schema
  Course : {
    students: async (course: any) => {
      const studentCourseObject= await models.studentCourse.find({'course_id':course.id});
      const student_id_array : number[] = []
      studentCourseObject.forEach((individualStudent) => {
        return student_id_array.push(individualStudent.student_id)
      })
      const students: {}[] = [];
      for (let i=0; i < student_id_array.length; i++){
        let id = student_id_array[i]
        let temp = await models.student.findById(id)
        students.push(temp)
      }
      return students;
     
    }
  },


    Query: {
        course: async (_: any, { id }: { id: number }) => {
          const course = await models.course.findById(id);
          return course
        },
    
        courses: async () => {
          const courses = await models.course.all();
          return courses;
        },
      },
}