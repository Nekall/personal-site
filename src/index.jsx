import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

// Components
import Navbar from "components/Navbar";
//import Footer from "components/Footer";

// Pages
import Projects from "pages/Projects";
import Error from "pages/Error";
import Home from "pages/Home";

// Styles
import "./styles/main.scss";

const App = () => (
  <div>
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>
          <Route path="/projects" exact>
            <Navbar />
            <Projects />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </main>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
