import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Name from 'components/Name';
import Footer from 'components/Footer';
import ReactDOM from 'react-dom';
import Home from 'pages/Home';
import Ronincode from 'pages/Ronincode';
import Notacine from 'pages/Notacine';
import Silverfish from 'pages/Silverfish';
import Blog from 'pages/Blog';
import './style/main.scss';
import React from "react";

const App=()=>{
  return (
    <div>
      <Router>
        <main>
          <Switch>
            <Route path="/" exact>
              <Navbar />
              <Home />
            </Route>
            <Route path="/ronincode" exact>
              <Name />
              <Ronincode />
            </Route>
            <Route path="/notacine" exact>
              <Name />
              <Notacine />
            </Route>
            <Route path="/silverfish-infesting-space" exact>
              <Name />
              <Silverfish />
            </Route>
            <Route path="/blog" exact>
              <Name />
              <Blog />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
