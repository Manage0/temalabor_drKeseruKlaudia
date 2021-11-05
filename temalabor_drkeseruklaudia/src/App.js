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
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"></input>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
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
