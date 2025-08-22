import './App.css'
import './index.css'

import Navbar from './components/Navbar'
import SwiperSlider from './components/Slider'
import VisionSection from './components/VisionSection'
import FeaturesSection from './components/FuturesSection'
import Applications from './components/Aplications'
import SecondFeaturesSection from './components/SecondFutureSection'
import WorkingTogether from './components/WorkingTogether'
import SingleImageSection from './components/SingleImageSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <SwiperSlider />
      <VisionSection/>
      <FeaturesSection/>
      <Applications/>
      <SecondFeaturesSection/>
      <WorkingTogether/>
      <SingleImageSection/>
      <NewsSection/>
      <Footer/>
    </div>
  );
}

export default App;