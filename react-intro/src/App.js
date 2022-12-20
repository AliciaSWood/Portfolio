import logo from './logo.svg';
import './App.css';
import Main from './containers/MainPage/Main';
import AboutMe from './containers/AboutMe/AboutMe';
import Navbar from './components/Navbar';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
          <Main></Main>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
    </div>

  );
}

export default App;
