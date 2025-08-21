import './App.css'
import './index.css'

import Navbar from '../src/components/Navbar'
import SwiperSlider from './components/Slider'
import VisionSection from './components/VisionSection'
import FeaturesSection from './components/FuturesSection'
import Applications from './components/Aplications'



function App() {
  return (
    <div>
      <Navbar />
      <SwiperSlider />
      <VisionSection/>
      <FeaturesSection/>
      <Applications/>
    
    </div>
  );
}

export default App;