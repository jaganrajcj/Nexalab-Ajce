import styles from "@/components/style";
import { discount, robot } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";
import { Cover } from "./ui/cover";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div> */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          <span className="text-gradient">Empowering</span> <br className="sm:block hidden" />{" "}
          <span className=""><Cover className="text-white">Innovation</Cover></span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        One Byte at a Time
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Unlock cutting-edge robotics and AI skills at Amal Jyothi&apos;s Nexa Future Ready Lab. Hands-on courses for tomorrow&apos;s tech innovators, powered by global expertise.
      </p>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image
        src={'/assets/robot-kid.png'}
        alt="billings"
        width={400}
        height={600}
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
