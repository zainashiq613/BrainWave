import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
// import Button from './components/Button';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AppRoadmap from './components/AppRoadmap';
import Services from './components/Services';
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <AppRoadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
