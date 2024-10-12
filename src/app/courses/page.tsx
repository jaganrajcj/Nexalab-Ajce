import React from 'react'
import styles from "@/components/style";
import { courses } from "@/constants";
import { Clock, Users, Award } from 'lucide-react';
import { Navbar } from '@/components';

// Define the interface for a course
interface Course {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  duration: string;
  highlights: string[];
}

// Update CourseDetails to use the Course interface
const CourseDetails: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-black-gradient-2 rounded-[20px] p-6 mb-8 w-full">
    <h3 className={`text-4xl font-bold mb-4`}>{course.title}</h3>
    <p className={`${styles.paragraph} mb-6`}>{course.tagline}</p>
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="flex items-center">
        <Clock className="w-5 h-5 mr-2 text-secondary" />
        <span className={styles.paragraph}>{course.duration}</span>
      </div>
      <div className="flex items-center">
        <Users className="w-5 h-5 mr-2 text-secondary" />
        <span className={styles.paragraph}>Limited Seats</span>
      </div>
      <div className="flex items-center">
        <Award className="w-5 h-5 mr-2 text-secondary" />
        <span className={styles.paragraph}>Certificate Included</span>
      </div>
    </div>
    <div className="mb-6">
      <h4 className={`text-2xl font-semibold mb-2`}>Course Highlights:</h4>
      <ul className="list-disc list-inside">
        {course.highlights.map((highlight, index) => (
          <li key={index} className={`${styles.paragraph} mb-1`}>{highlight}</li>
        ))}
      </ul>
    </div>
    <button className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] mt-4">
      Enroll Now
    </button>
  </div>
);

// Update Courses component
const Courses: React.FC = () => {
  return (
    <div className={`bg-primary `}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.boxWidth} mt-16`}>
        <div className="grid grid-cols-1 gap-4 w-full">
          {courses.map((course: Course) => (
            <CourseDetails key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
