import { Student } from "./students"
import database from "./db"
import { Course } from "./courses"
import { StudentCourse } from "./studentCourses"



const student = new Student(database, 'students')
const course = new Course(database, 'courses')
const studentCourse = new StudentCourse(database, 'students_courses')
const instructor = new StudentCourse(database, 'instructors')


const models = {
    student,
    course,
    studentCourse,
    instructor
}

export default models;