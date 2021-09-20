import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Name from 'components/Name';
import ReactDOM from 'react-dom';
import Home from 'pages/Home';
import Ronincode from 'pages/Ronincode';
import Notacine from 'pages/Notacine';
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
          </Switch>
        </main>
      </Router>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
