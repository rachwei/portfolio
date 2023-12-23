import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'

import HomePage from './components/HomePage'
import Contact from './components/Contact'
import Research from './components/Research'
import NavigationBar from './components/NavigationBar';
import Art from './components/Art';
import Projects from './components/Projects';

import { ToastContainer, toast } from 'react-toastify';
import {useEffect} from 'react'

import 'react-toastify/dist/ReactToastify.css';


const Font = styled.div`
    font-family: "Lucida Console", "Courier New", monospace;
`

function App() {

  useEffect(() => {
    // Automatically show an alert after the component is mounted
    toast.info('Mobile friendly version coming soon! 📱', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        fontFamily: '"Lucida Console", "Courier New", monospace',
      },
      theme: "light",
      });
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Font>
          <NavigationBar />
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="research" element={ <Research/> } />
            <Route path="art" element={ <Art/> } />
            <Route path="projects" element={ <Projects/> } />
            <Route path="contact" element={ <Contact/> } />
          </Routes>
      </Font>
    </div>
  );
}

export default App;

// find me here! spotify, substack, goodreads, linkedin, medium