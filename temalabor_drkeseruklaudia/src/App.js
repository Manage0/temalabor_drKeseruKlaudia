import './App.css';
import Header from './Header/Header';
import IntroSection from './Pages/IntroSection/IntroSection';
import CVSection from './Pages/CVSection/CVSection';
import ServicesSection from './Pages/ServicesSection/ServicesSection';
import HIW from './Pages/HIWSection/HIW';
import ContactSection from './Pages/ContactSection/ContactSection';
import React, { useState } from 'react';
import { LangContext, LangProvider } from './Contexts/LangContext';
import Price from './Pages/Price/PriceSection';
import ImpSec from './Pages/ImpSection/ImpSec';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

function App() {

  //SEO

  const [render, SetRender] = useState("true")

  function Render() {
    SetRender(!render)
  }

  const Form = () => {
    return (
      <form name="contact v1" method="POST" data-netlify="true" enctype="application/x-www-form-urlencoded">
        <input type="hidden" name="form-name" value="contact v1" />
        <p>
          <label>Your Name: <input type="text" name="name v1" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email v1" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message v1"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

    )
  }

  return (
    <div>
      <LangProvider value="hun">
        <Router>
          <Switch>
            <Route exact path="/">
              <Form />
              <Header />
              <IntroSection />
              <CVSection />
              <ServicesSection />
              <HIW />
              <Price />
              <ContactSection />
              <ImpSec />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </LangProvider>
    </div>

  );
}

export default App;
