import { useState } from "react";
import Navbar from "./components/Navbar";
import SwiperSlider from "./components/Slider";
import VisionSection from "./components/VisionSection";
import FeaturesSection from "./components/FuturesSection";
import Applications from "./components/Aplications";
import SecondFeaturesSection from "./components/SecondFutureSection";
import WorkingTogether from "./components/WorkingTogether";
import SingleImageSection from "./components/SingleImageSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTop";
import LoaderScreen from "./loaderScreen";

import About from "./about";
import News from "./news";

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div>
      {!loadingFinished ? (
        <LoaderScreen onFinish={() => setLoadingFinished(true)} />
      ) : (
        <>
          <Navbar active={activeSection} setActive={setActiveSection} />

          <div className="mt-28"> {/* żeby navbar nie zasłaniał contentu */}
            {activeSection === "Home" && (
              <>
                <SwiperSlider />
                <BackToTopButton />
                <VisionSection />
                <FeaturesSection />
                <Applications />
                <SecondFeaturesSection />
                <WorkingTogether />
                <SingleImageSection />
                <NewsSection />
                <Footer />
              </>
            )}

            {activeSection === "About Us" && <About />}
            {activeSection === "News" && <News />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
