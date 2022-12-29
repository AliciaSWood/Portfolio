import logo from './logo.svg';
import './App.css';
import Main from './containers/MainPage/Main';
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
          {/* <Main></Main> */}
          <LandingPage></LandingPage>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
    </div>

  );
}

export default App;
