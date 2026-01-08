import './App.css';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AboutSui from './components/AboutSui';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Skills />
      <Experience />
      <AboutSui />
    </div>
  );
}

export default App;
