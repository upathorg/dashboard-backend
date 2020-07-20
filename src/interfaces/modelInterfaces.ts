export interface StudentCreateInterface {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export interface StudentUpdateInterface {
  id?: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
}

export interface CourseCreateInterface {
  id?: number;
  title: string;
  description: string;
  ratings: number;
  instructor_id: number;
}

export interface CourseUpdateInterface {
  id?: number;
  title?: string;
  description?: string;
  ratings?: number;
}

export interface EnrollCourseInterface{
  id?: number;
  student_id: number;
  course_id: number;
}

export interface InstructorCreateInterface {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export interface InstructorUpdateInterface {
  id?: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
}