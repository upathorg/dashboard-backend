import { Student } from "./students"
import database from "./db"
import { Course } from "./courses"



const student = new Student(database, 'students')
const course = new Course(database, 'courses')
const studentCourse = new Course(database, 'students_courses')

const models = {
    student,
    course,
    studentCourse
}

export default models;