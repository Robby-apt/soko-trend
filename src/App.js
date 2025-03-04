import { Unity, useUnityContext } from 'react-unity-webgl';
import './App.css'; // Make sure your CSS has the necessary animations
import SimpleFooter from './Pages/SimpleFooter';
import DemoNavbar from './Pages/DemoNavbar';
import HomePage from './Pages/HomePage';
import Body from './Pages/Body';
import UnityWebGLSection from './Pages/UnityWebGLSection';
import { useEffect } from 'react';

// Importing AOS (Animate On Scroll) library for scroll-based animations (optional but cool)
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const App = () => {
  
  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true, // Animation will only happen once when the element is visible
    });
  }, []);

  return (
    <div className="App">
      <DemoNavbar />
      {/*Homepage-------------------------------------------------------------------------------*/}
      <HomePage/>
      {/*end of homepage------------------------------------------------------------------------------------*/}
      <div id="ai">
      <UnityWebGLSection />
      </div>
      {/* Body section with fade-in effect */}
      <div data-aos="fade-up">
        <Body />
      </div>
      
      <div data-aos="fade-in" data-aos-delay="200" id="contact">
        <SimpleFooter />
      </div>
    </div>
  );
};

export default App;
