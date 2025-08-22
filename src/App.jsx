import './App.css'
import './index.css'

import Navbar from '../src/components/Navbar'
import SwiperSlider from './components/Slider'
import VisionSection from './components/VisionSection'
import FeaturesSection from './components/FuturesSection'
import Applications from './components/Aplications'
import SecondFeaturesSection from './components/SecondFutureSection'
import WorkingTogether from './components/WorkingTogether'


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

    </div>
  );
}

export default App;