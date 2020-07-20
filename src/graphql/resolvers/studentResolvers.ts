import models from "../../models";

export const studentResolvers = {

     // resolver to get data from the database for fields specific to student schema
  Student : {
    courses: async (student: any) => {
      const studentCourseObject= await models.studentCourse.find({'student_id':student.id});
      const course_id_array : number[] = []
      studentCourseObject.forEach((individualCourse) => {
        return course_id_array.push(individualCourse.course_id)
      })
      const courses: {}[] = [];
      for (let i=0; i < course_id_array.length; i++){
        let id = course_id_array[i]
        let temp = await models.course.findById(id)
        courses.push(temp)
      }
      return courses;
     
    }
  },

  
    Query: {
        students: async () => {
          const students = await models.student.all();
          return students;
        },
    
        student: async (_: any, { id }: { id: number }) => {
          const student = await models.student.findById(id);
          return student
        },
    
      }
}