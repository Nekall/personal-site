import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ReactDOM from 'react-dom';

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
        <Routes>
          <Route path="/" exact element={
            <>
              <Navbar />
              <Home />
            </>
          } />
          <Route path="/projects" exact element={
            <>
              <Navbar />
              <Projects />
            </>
          } />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
