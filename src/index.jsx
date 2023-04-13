import { useEffect, useState } from "react";
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

const App = () => {
  const userLang = navigator.language;
  const [localLang, setLocalLang] = useState(localStorage.getItem("__lang__neka.dev"));

  useEffect(() => {
    if (!localLang || (!localLang.includes("en") && !localLang.includes("fr"))) {
      if (userLang.includes("fr")) {
        setLocalLang("fr");
        localStorage.setItem("__lang__neka.dev", "fr");
      } else {
        setLocalLang("en");
        localStorage.setItem("__lang__neka.dev", "en");
      }
    }else{
      setLocalLang(localLang);
      localStorage.setItem("__lang__neka.dev", localLang);
    }
  }, [localLang, userLang])

  return (
    <div>
      <Router>
        <main>
          <Routes>
            <Route path="/" exact element={
              <>
                <Navbar lang={localLang} setLang={setLocalLang} />
                <Home lang={localLang} />
              </>
            } />
            <Route path="/projects" exact element={
              <>
                <Navbar lang={localLang} setLang={setLocalLang} />
                <Projects lang={localLang} />
              </>
            } />
            <Route path="*" element={<Error lang={localLang} />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
