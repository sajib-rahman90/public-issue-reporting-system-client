import Banner from "./Banner";
import CTASection from "./CTAsection";
import FAQSection from "./FAQSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import ImpactSection from "./ImpactSection";
import IssueCategories from "./IssueCategories";
import LatestResolved from "./LatestResolved";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestResolved />
      <ImpactSection />
      <IssueCategories />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default Home;
