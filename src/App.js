import './App.css';
import React from 'react'
import Logo from './Logo';
import Home from './Home';
import Men from './Men'
import Women from './Women'
import Kids from './Kids';
import Beauty from './Beauty';
import Categories from './Categories';
import Skirts from './Skirts';
import Topwear from './Topwear';
import GirlsClothing from './GirlsClothing';
import Makeup from './Makeup';
import LiveStudio from './LiveStudio';
import PriceGraph from './PriceGraph';
import PriceWatch from './PriceWatch';
import Certificate from './Certificate';
import OrderDetails from './OrderDetails';
import Profile from './Profile'
import LiveStreaming from './LiveStreaming';
import HexadPremium from './HexadPremium';
import CreateAccount from './CreateAccount';
import { BrowserRouter as Router,Route, Link , Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Logo/>}></Route>
            <Route exact path="/CreateAccount" element={<CreateAccount/>}></Route>
            <Route exact path="/Home" element={<Home/>}></Route>
            <Route exact path="/Logo" element={<Logo/>}></Route>
            <Route exact path="/Men" element={<Men/>}></Route>
            <Route exact path="/Kids" element={<Kids/>}></Route>
            <Route exact path="/Beauty" element={<Beauty/>}></Route>
            <Route exact path="/Women" element={<Women/>}></Route>
            <Route exact path="/Categories" element={<Categories/>}></Route>
            <Route exact path="/Skirts" element={<Skirts/>}></Route>
            <Route exact path="/Topwear" element={<Topwear/>}></Route>
            <Route exact path="/Makeup" element={<Makeup/>}></Route>
            <Route exact path="/GirlsClothing" element={<GirlsClothing/>}></Route>
            <Route exact path="/LiveStudio" element={<LiveStudio/>}></Route>
            <Route exact path="/PriceGraph" element={<PriceGraph/>}></Route>
            <Route exact path="/PriceWatch" element={<PriceWatch/>}></Route>
            <Route exact path="/Certificate" element={<Certificate/>}></Route>
            <Route exact path="/OrderDetails" element={<OrderDetails/>}></Route>
            <Route exact path="/LiveStreaming" element={<LiveStreaming/>}></Route>
            <Route exact path="/Profile" element={<Profile/>}></Route>
            <Route exact path="/HexadPremium" element={<HexadPremium/>}></Route>

          </Routes>
        </div>
      </Router>
  );
}

export default App