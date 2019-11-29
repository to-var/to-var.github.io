import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import MetaTags from './MetaTags';
import Home from './pages/Home';
import About from './pages/About';
import Ventas from './pages/Ventas';
import Footer from './components/PageFooter';

export default function App() {
  return (
    <HashRouter basename='/'>
      <MetaTags />
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route path="/ventas" component={Ventas}/>
      <Footer>© Jose Tovar</Footer>
    </HashRouter>
  );
}
