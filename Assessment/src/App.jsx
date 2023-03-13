import './App.css'
import Navigation from './Components/nav';
import HeroSection from './Components/HeroSection';
import Features from './Components/Features'
import Steps from './Components/Steps';
import Author from './Components/Author';

const App = () => {
  return (
    
    <>
      <Navigation />
      <HeroSection />
      <Features />
      <Steps />
      <Author/>
    </>
  )
}

export default App