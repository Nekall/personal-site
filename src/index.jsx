import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

// Components
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Name from 'components/Name';

// Pages
import Silverfish from 'pages/Silverfish';
import Ronincode from 'pages/Ronincode';
import Notacine from 'pages/Notacine';
import Project from 'pages/Project';
import Slickk from 'pages/Slickk';
import Savime from 'pages/Savime';
import Error from 'pages/Error';
import Home from 'pages/Home';

// Styles
import './style/main.scss';


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
            <Route path="/slickk" exact>
              <Name />
              <Slickk />
            </Route>
            <Route path="/savime" exact>
              <Name />
              <Savime />
            </Route>
            <Route path="/project" exact>
              <Name />
              <Project />
            </Route>
            <Route>
              <Name />
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
