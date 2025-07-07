import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills' ;

function App() {
  return (
    <div className="App text-light">
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    
    </div>
  );
}

export default App;
