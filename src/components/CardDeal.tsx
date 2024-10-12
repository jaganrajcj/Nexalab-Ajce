import { card, modernTechnology } from "@/public/assets";
import styles, { layout } from "@/components/style";
import Button from "./Button";
import Image from "next/image";

const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Explore Cutting-Edge Courses
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In just a few simple steps, start your journey into future technologies.
        From Robotics to AI, our hands-on programs are designed to equip you with industry-relevant skills.
        Unlock your potential and take the next step toward mastering the tech of tomorrow.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={modernTechnology} alt="card" className="w-[80%]" />
    </div>
  </section>
);

export default CardDeal;
