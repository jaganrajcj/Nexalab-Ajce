import { apple, artificialIntelligence, bill, google } from "@/public/assets";
import styles, { layout } from "@/components/style";
import Image from "next/image";
const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={artificialIntelligence}
        alt="billing"
        className="w-[85%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Master Future <br className="sm:block hidden" /> Technologies with Ease
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Gain hands-on experience in cutting-edge fields like Robotics, AI, and IoT.
        Our expertly designed courses ensure you&apos;re always ahead of the curve.
        Whether you&apos;re just starting out or advancing your skills, NexaLab provides everything you need to succeed.
      </p>
    </div>
  </section>
);

export default Billing;
