import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'

import HomePage from './components/HomePage'
import Contact from './components/Contact'
import Research from './components/Research'
import NavigationBar from './components/NavigationBar';
import FindMe from './components/FindMe'
import Art from './components/Art';
import Projects from './components/Projects';


const Font = styled.div`
    font-family: "Lucida Console", "Courier New", monospace;
`

function App() {
  return (
    <div className="App">
      <Font>
          <NavigationBar />
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="research" element={ <Research/> } />
            <Route path="art" element={ <Art/> } />
            <Route path="projects" element={ <Projects/> } />
            <Route path="contact" element={ <Contact/> } />
          </Routes>
          <FindMe />
      </Font>
    </div>
  );
}

export default App;

// find me here! spotify, substack, goodreads, linkedin, medium