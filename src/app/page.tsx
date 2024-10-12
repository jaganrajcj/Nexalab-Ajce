import styles from "@/components/style";
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Clients, CTA, Footer } from "@/components"
import CourseOverview from "@/components/Testimonials";
const Home: React.FC = () => {
  return (
    <>
      <div className="bg-primary overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} w-full max-w-7xl mx-auto`}>
            {/* <Stats /> */}
            <Business />
            <Billing />
            <CardDeal />
            <CourseOverview />
            {/* <Clients /> */}
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home