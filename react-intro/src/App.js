import './App.css';
import AboutMe from './containers/AboutMe/AboutMe';
import Navbar from './components/Navbar';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import LandingPage from './containers/MainPage/LandingPage';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
          <LandingPage></LandingPage>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
    </div>

  );
}

export default App;
