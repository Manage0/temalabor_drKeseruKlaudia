import './App.css';
import Header from './Header/Header';
import IntroSection from './Pages/IntroSection/IntroSection';
import CVSection from './Pages/CVSection/CVSection';
import ServicesSection from './Pages/ServicesSection/ServicesSection';
import HIW from './Pages/HIWSection/HIW';
import ContactSection from './Pages/ContactSection/ContactSection';
import React, {useState} from 'react';
import { LangContext, LangProvider } from './Contexts/LangContext';
import Price from './Pages/Price/PriceSection';
import ImpSec from './Pages/ImpSection/ImpSec';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

function App() {

  //SEO

  const[render, SetRender]=useState("true")

  function Render(){
    SetRender(!render)
  }

  return (
    <div>
      <LangProvider value="hun">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header fun={Render} />
              <IntroSection/>
              <CVSection/>
              <HIW/>
              <Price/>
              <ContactSection/> 
              <ImpSec/>
            </Route>
            <Route path="/szakteruletek">
              <Header fun={Render} />
              <ServicesSection/>
            </Route>
            <Redirect to="/"/>
          </Switch>
        </Router>
      </LangProvider> 
    </div>

  );
}

export default App;
