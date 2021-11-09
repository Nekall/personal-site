import React from "react";
import background from "../../assets/images/pexels-anni-roenkae-4175070.jpg";
import roninlogo from "../../assets/images/ronincode-logo.jpg";
import notalogo from "../../assets/images/notacine-logo.jpg";
import javascript from "../../assets/images/javascript.svg";
import download from "../../assets/images/download.svg";
import location from "../../assets/images/location.svg";
import linkedin from 'assets/images/linkedin.svg';
import react from "../../assets/images/react.svg";
import html5 from "../../assets/images/html5.svg";
import codepen from 'assets/images/codepen.svg';
import twitter from 'assets/images/twitter.svg';
import mail from "../../assets/images/mail.svg";
import css3 from "../../assets/images/css3.svg";
import sass from "../../assets/images/sass.svg";
import github from 'assets/images/github.svg';
import thp from 'assets/images/thp.png';
import me from "../../assets/images/me.png";
import { Link } from 'react-router-dom';

const Home=()=>{

  console.log(("  _   _               "), '\n', ("( ) ( )              "), '\n', ("| |_| |   __   _   _ "), '\n', ("|  _  | /'__`\\( ) ( )"), '\n',("| | | |(  ___/| (_) |"), '\n',("(_) (_)`\\____)`\\__, |"), '\n',("              ( )_| |"), '\n',("              `\\___/'"));
  console.log("N'hésitez pas a me contacter si vous êtes interessés par mon profil ☺");

  return(
    <div className="container">

      <div className="photo">
        <img className="background" src={background} alt="background"/>
        <img className="me" src={me} alt="me"/>
      </div>

      <div className="social">
        <a href='https://github.com/Nekall' target="_blank" rel="noreferrer"><img alt="github" className="logo github" src={github} /></a>
        <a href='https://www.linkedin.com/in/benjamin-anezo-40b83b216/' target="_blank" rel="noreferrer"><img alt="linkedin" className="logo linkedin" src={linkedin} /></a>
        <a href='https://codepen.io/LilNeka/' target="_blank" rel="noreferrer"><img alt="codepen" className="logo codepen" src={codepen} /></a>
        <a href='https://twitter.com/36Qm7p5CGz' target="_blank" rel="noreferrer"><img alt="twitter" className="logo twitter" src={twitter} /></a>
      </div>

      <a className="btn-download" href="/Benjamin_Anezo_CV.pdf" target="_blank">Télécharger mon CV</a>

      <div className="about">
        <div className="title-container">
          <h2 className="title shadow">A propos</h2>
          <h2 className="title">A propos</h2>
        </div>

        <p>
          Cela fait des années que le monde du développement informatique m'attire.
          En 2021 j'ai enfin sauté le pas, en quittant mon ancien travail dans l'agroalimentaire et en rejoignant
          le bootcamp de <a target="_blank" rel="noreferrer" href="https://www.thehackingproject.org/">The Hacking Project</a> pendant 6 mois.
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
            <img className="techno-logo react" src={react} alt="react"/>
            <img className="techno-logo sass" src={sass} alt="sass"/>
        </div>
      </div>
      <span id="formation"></span>
      <div>
        <div className="title-container">
          <h2 className="title shadow">Formation</h2>
          <h2 className="title">Formation</h2>
        </div>
        <div className="formation">
          <p className="date">2021</p>
          <a target="_blank" rel="noreferrer" href="https://www.thehackingproject.org/"><img className="logo-thp" src={thp} alt="logo the hacking project"/></a>
          <p className="thp-name">The Hacking Project</p>
          <ul>
            <li>Maîtriser le frontend, le backend, le génie logiciel ainsi que la gestion de projet</li>
            <li>Apprendre les langages HTML et CSS ainsi qu'à utiliser Bootstrap</li>
            <li>Découvrir les bases du marketing digital et les notions de design</li>
            <li>Apprendre à utiliser les outils logiciels Git et Github</li>
            <li>Lancer un projet et une application web en utilisant le langage Ruby et le framework Ruby on Rails</li>
            <li>Approfondir ses connaissances du langage JavaScript de l'intégration des interfaces de programmation d'applications (APIs),SPA, de ReactJS.</li>
            <li>Utiliser les framework et applications React et Redux ainsi que les librairies graphiques</li>
            <li>Développer une méthodologie de travail utile à tout poste grâce à la maîtrise des outils de collaboration, de la méthodologie Agile ainsi que de la mise en production et de la gestion humaine</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="title-container">
          <h2 className="title shadow">Savoir-faire</h2>
          <h2 className="title">Savoir-faire</h2>
        </div>
        <div className="expertise-list">
          <li> Choisir les bonnes technologies à utiliser</li>
          <li> Développer des applications web pour des besoins spécifiques</li>
          <li> Adaptation rapide à de nouveaux langages et technologies</li>
          <li> Capacité d’analyse et de résolution de problème</li>
          <li> Évolution et maintenance de sites et d’applications</li>
          <li> Développement Fullstack (Frontend et Backend)</li>
          <li> Responsive design</li>
        </div>
      </div>
      <span id="projects"></span>
      <div className="projects">
        <div className="title-container">
          <h2 className="title shadow">Mes Réalisations</h2>
          <h2 className="title">Mes Réalisations</h2>
        </div>
        <div className="projects-columns">
          <Link to="/notacine">
            <img className="notalogo" src={notalogo} alt="logo notaciné"/>
          </Link>
          <Link to="/ronincode">
            <img className="roninlogo" src={roninlogo} alt="logo ronincode"/>
          </Link>
        </div>
      </div>
      <span id="contact"></span>
      <div className="contact">
        <div className="title-container">
          <h2 className="title shadow">Contact</h2>
          <h2 className="title">Contact</h2>
        </div>
        <div className="contact-columns">
          <div>
            <img className="logo-contact" src={location} alt="localisation"/>
            <p>Paris</p>
          </div>
          <div>
            <img className="logo-contact" src={download} alt="téléchargement du cv"/>
            <p><a href="/Benjamin_Anezo_CV.pdf" target="_blank">Curriculum vitæ</a></p>
          </div>
          <div>
            <img className="logo-contact" src={mail} alt="mail"/>
            <p>contact@neka.dev</p>
          </div>
        </div>
      </div>

      <footer>
        <div></div>
        <p>Site créé par Benjamin avec <span>♥</span></p>
      </footer>

    </div>
  )
};
export default Home;
