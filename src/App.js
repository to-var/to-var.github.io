import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MetaTags from './MetaTags';
import Home from './pages/Home';
import Ventas from './pages/Ventas';
import Footer from './components/PageFooter';

export default function App() {
  return (
    <Router>
      <MetaTags />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ventas">
          <Ventas />
        </Route>
      </Switch>
      <Footer>© Jose Tovar</Footer>
    </Router>
  );
}
