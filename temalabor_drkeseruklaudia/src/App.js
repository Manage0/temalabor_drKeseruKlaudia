import './App.css';
import Header from './Header/Header';
import IntroSection from './Components/IntroSection/IntroSection';
import CVSection from './Components/Introduction/Introduction';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import HIW from './Components/HIW/HIW';
import ContactSection from './Components/Contact/Contact';
import React, { useState } from 'react';
import { LangProvider } from './Contexts/LangContext';
import Price from './Components/Price/PriceSection';
import Impress from './Components/Impress/Impress';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

function App() {

  //SEO

  return (
    <div>
      <LangProvider value="hun">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <IntroSection />
              <CVSection />
              <ServicesSection />
              <HIW />
              <Price />
              <ContactSection />
              <Impress />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </LangProvider>
    </div>

  );
}

export default App;
