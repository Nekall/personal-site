import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import ReactDOM from 'react-dom';
import Home from 'pages/Home';
import './style/main.scss';
import React from "react";

const App=()=>{
  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
