import { useState } from "react"
import Navbar from "./components/Navbar"
import SwiperSlider from "./components/Slider"
import VisionSection from "./components/VisionSection"
import FeaturesSection from "./components/FuturesSection"
import Applications from "./components/Aplications"
import SecondFeaturesSection from "./components/SecondFutureSection"
import WorkingTogether from "./components/WorkingTogether"
import SingleImageSection from "./components/SingleImageSection"
import NewsSection from "./components/NewsSection"
import Footer from "./components/Footer"
import BackToTopButton from "./components/BackToTop"
import LoaderScreen from "./loaderScreen"

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false)

  return (
    <div>
      {!loadingFinished ? (
        <LoaderScreen onFinish={() => setLoadingFinished(true)} />
      ) : (
        <>
          <Navbar />
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
    </div>
  )
}

export default App
