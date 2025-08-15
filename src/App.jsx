import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './component/HeroSection'
import PrivateAdvisorySection from './component/PrivateAdvisorySection'
import CoreCapabilities from './component/CoreCapabilities'
import TimelineSection from './component/TimelineSection'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroSection/>
    <PrivateAdvisorySection/>
    <CoreCapabilities/>
    <TimelineSection/>
    <Footer/>
    </>
  )
}

export default App
