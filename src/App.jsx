import './App.css'
import Navigation from './Components/nav';
import HeroSection from './Components/HeroSection';
import Features from './Components/Features'
import Steps from './Components/Steps';
import Author from './Components/Author';
import Testimonials from './Components/Testimonials';
import Download from './Components/Download';
import Team from './Components/Team';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

const App = () => {
  return (
    
    <>
      <Navigation />
      <HeroSection />
      <Features />
      <Steps />
      <Author/>
      <Testimonials/>
      <Download />
      <Team />
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App