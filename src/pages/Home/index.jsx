import React from "react";

// Components
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Formation from "../../components/Formation";

// Assets
import meTransparent from "../../assets/images/me-transparent.png";
import linkedin from 'assets/images/social-networks/linkedin.svg';
import codepen from 'assets/images/social-networks/codepen.svg';
import twitter from 'assets/images/social-networks/twitter.svg';
import github from 'assets/images/social-networks/github.svg';
import me from "../../assets/images/me-v2.png";

// Assets Technologies
import javascript from "../../assets/images/technologies/javascript.svg";
import react from "../../assets/images/technologies/react.svg";
import html5 from "../../assets/images/technologies/html5.svg";
import css3 from "../../assets/images/technologies/css3.svg";
import sass from "../../assets/images/technologies/sass.svg";
import nextjs from "../../assets/images/technologies/nextjs.svg";
import strapi from "../../assets/images/technologies/strapi.svg";
import typescript from "../../assets/images/technologies/typescript.svg";
import nodejs from "../../assets/images/technologies/nodejs.svg";

const Home=()=>{
  console.clear()
  console.log(("  _   _               "), '\n', ("( ) ( )              "), '\n', ("| |_| |   __   _   _ "), '\n', ("|  _  | /'__`\\( ) ( )"), '\n',("| | | |(  ___/| (_) |"), '\n',("(_) (_)`\\____)`\\__, |"), '\n',("              ( )_| |"), '\n',("              `\\___/'"));
  //console.log("N'hésitez pas a me contacter si vous êtes interessés par mon profil ☺");

  return(
    <div className="container">
      <div className="photo">
        <img className="me" src={me} alt="me"/>
        <img className="me-transparent" src={meTransparent} alt="me"/>
      </div>
      <div className="social">
        <a href='https://github.com/Nekall' target="_blank" rel="noopener noreferrer"><img alt="github" className="logo github" src={github} /></a>
        <a href='https://www.linkedin.com/in/benjamin-anezo-40b83b216/' target="_blank" rel="noopener noreferrer"><img alt="linkedin" className="logo linkedin" src={linkedin} /></a>
        <a href='https://codepen.io/LilNeka/' target="_blank" rel="noopener noreferrer"><img alt="codepen" className="logo codepen" src={codepen} /></a>
        <a href='https://twitter.com/36Qm7p5CGz' target="_blank" rel="noopener noreferrer"><img alt="twitter" className="logo twitter" src={twitter} /></a>
      </div>
      <a className="btn-download" href="/Benjamin_Anezo_CV.png" target="_blank">Télécharger mon CV</a>
      <div className="about">
        <div className="title-container">
          <h2 className="title shadow">A propos</h2>
          <h2 className="title">A propos</h2>
        </div>
        <p>
          Cela fait des années que le monde du développement informatique m'attire.
          En 2021 j'ai enfin sauté le pas, en quittant mon ancien travail dans l'agroalimentaire et en rejoignant
          le bootcamp de <a target="_blank" rel="noopener noreferrer" href="https://www.thehackingproject.org/">The Hacking Project</a> afin de devenir fullstack développeur.
          Suite à cette première formation et dans le but de me professionnaliser, je suis actuellement étudiant à la <a target="_blank" rel="noopener noreferrer" href="https://3wa.fr/">3w Academy</a> en alternance chez Slickk.
        </p>
      </div>
      <span id="competences"></span>
      <div className="skills">
        <div className="title-container">
          <h2 className="title shadow">Mes compétences</h2>
          <h2 className="title">Mes compétences</h2>
        </div>
        <div className="technos">
          <img className="techno-logo css3" src={css3} alt="css3"/>
          <img className="techno-logo html5" src={html5} alt="html5"/>
            <img className="techno-logo javascript" src={javascript} alt="javascript"/>
            <img className="techno-logo typescript" src={typescript} alt="typescript"/>
            <img className="techno-logo sass" src={sass} alt="sass"/>
            <img className="techno-logo react" src={react} alt="react"/>
            <img className="techno-logo nextjs" src={nextjs} alt="nextjs"/>
            <img className="techno-logo nodejs" src={nodejs} alt="nodejs"/>
            <img className="techno-logo strapi" src={strapi} alt="strapi"/>
        </div>
      </div>
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
