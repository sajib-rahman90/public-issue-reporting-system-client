import Banner from "./Banner";
import CTASection from "./CTAsection";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import ImpactSection from "./ImpactSection";
import LatestResolved from "./LatestResolved";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestResolved />
      <ImpactSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default Home;
