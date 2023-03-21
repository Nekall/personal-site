import React from "react";

// Components
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Formation from "../../components/Formation";
import Skills from "../../components/Skills";
import Introduction from "../../components/Introduction";

const Home=()=>{
  console.clear()
  console.log(("  _   _               "), '\n', ("( ) ( )              "), '\n', ("| |_| |   __   _   _ "), '\n', ("|  _  | /'__`\\( ) ( )"), '\n',("| | | |(  ___/| (_) |"), '\n',("(_) (_)`\\____)`\\__, |"), '\n',("              ( )_| |"), '\n',("              `\\___/'"));
  //console.log("N'hésitez pas a me contacter si vous êtes interessés par mon profil ☺");

  return(
    <div className="container">
      <Introduction />
      <span id="competences"></span>
      <Skills />
      <span id="formation"></span>
      <Formation />
      <span id="projects"></span>
      <Projects />
      <span id="contact"></span>
      <Contact />
    </div>
  )
};
export default Home;
