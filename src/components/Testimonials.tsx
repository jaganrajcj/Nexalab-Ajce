import { courses } from "@/constants";
import styles from "@/components/style";
import CourseCard from "./CourseCard";

const CourseOverview: React.FC = () => (
  <section
    id="courses"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Explore Our <br className="sm:block hidden" /> 
        Cutting-Edge Courses
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Empower your future with hands-on learning in AI, IoT, and more. 
          Join Nexalab AJCE to master tomorrow's technologies today.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-between justify-center w-full feedback-container relative z-[1]">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  </section>
);

export default CourseOverview;
