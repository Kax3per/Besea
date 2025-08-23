// src/pages/Home.jsx
import FullscreenSlider from "./components/Slider"
import VisionSection from "./components/VisionSection"
import FeaturesSection from "./components/FuturesSection";
import Applications from "./components/Aplications";
import SecondFeaturesSection from "./components/SecondFutureSection";
import WorkingTogether from "./components/WorkingTogether";
import SingleImageSection from "./components/SingleImageSection";
import NewsSection from "./components/NewsSection";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <FullscreenSlider />
      <BackToTop />
      <VisionSection />
      <FeaturesSection />
      <Applications />
      <SecondFeaturesSection />
      <WorkingTogether />
      <SingleImageSection />
      <NewsSection />
    </>
  );
}
