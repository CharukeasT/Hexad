import './App.css';
// import './Sections.css'
import React from 'react'
import Logo from './Logo';
import Men from './Men'
import Women from './Women'
import Kids from './Kids';
import Beauty from './Beauty';
import Categories from './Categories';
import { BrowserRouter as Router,Route, Link , Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Logo/>}></Route>
            <Route exact path="/Logo" element={<Logo/>}></Route>
            <Route exact path="/Men" element={<Men/>}></Route>
            <Route exact path="/Kids" element={<Kids/>}></Route>
            <Route exact path="/Beauty" element={<Beauty/>}></Route>
            <Route exact path="/Women" element={<Women/>}></Route>
            <Route exact path="/Categories" element={<Categories/>}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App