import { CourseProps } from "@/types";
import { BrainCircuit, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard: React.FC<CourseProps> = ({ title, tagline, icon, duration }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* <Image src={icon} alt={title} width={72} height={72} className="mb-4 text-white" /> */}
    <BrainCircuit className="w-14 h-14 mb-4 text-gradient" />
    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white mb-2">
      {title}
    </h4>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
      {tagline}
    </p>
    <div className="flex items-center">
      {/* <Image src="/assets/clock.svg" alt="duration" width={24} height={24} /> */}
      <Clock className="w-6 h-6 text-dimWhite"/>
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ml-2">
        {duration}
      </p>
    </div>
    <Link href="/courses" className="mt-4">
      <button className="py-2 px-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]">
        Learn More
      </button>
    </Link>
  </div>
);

export default CourseCard;

