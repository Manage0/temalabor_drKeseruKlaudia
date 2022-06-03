import './App.css';
import Header from './Header/Header';
import IntroSection from './Components/IntroSection/IntroSection';
import CVSection from './Components/Introduction/Introduction';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import HIW from './Components/HIW/HIW';
import ContactSection from './Components/Contact/Contact';
import React, { useState, useEffect } from 'react';
import Price from './Components/Price/PriceSection';
import Impress from './Components/Impress/Impress';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import i18next from 'i18next';
import { LangProvider } from './Contexts/tContext';

function App() {

  //SEO

  const [trigger, settrigger] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      settrigger(!trigger)
    }, 0.1)
  }, [i18next.language])

  return (
    <div>
      <LangProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              {i18next.language && <>
                <Header />
                <IntroSection />
                <CVSection />
                <ServicesSection />
                <HIW />
                <Price />
                <ContactSection />
                <Impress />
              </>}
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </LangProvider>
    </div>

  );
}

export default App;
