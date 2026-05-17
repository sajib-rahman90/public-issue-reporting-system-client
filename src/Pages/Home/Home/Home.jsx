import Banner from "./Banner";
import CTASection from "./CTAsection";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import ImpactSection from "./ImpactSection";
import LatestResolved from "./LatestResolved";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestResolved />
      <ImpactSection />
      <FeaturesSection />
      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default Home;
