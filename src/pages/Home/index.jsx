import background from "../../assets/images/pexels-anni-roenkae-4175070.jpg";
import roninlogo from "../../assets/images/ronincode-logo.jpg";
import rubyonrails from "../../assets/images/rubyonrails.svg";
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
import me from "../../assets/images/me.png";
import { Link } from 'react-router-dom';

const Home=()=>{

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

      <a className="btn-download" href="cv.pdf" download>Télécharger mon CV</a>

      <div className="about">
        <div className="title-container">
          <h2 className="title shadow">A propos</h2>
          <h2 className="title">A propos</h2>
        </div>

        <p>
          Cela fait des années que le monde du développement informatique m'attire.
          En 2021 j'ai enfin sauté le pas, en quittant mon ancien travail dans l'agroalimentaire et en rejoignant
          la formation de <a target="_blank" rel="noreferrer" href="https://www.thehackingproject.org/">The Hacking Project</a> pour une durée de 6 mois.
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
            <img className="techno-logo rubyonrails" src={rubyonrails} alt="rubyonrails"/>
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
          <p>2021</p>
          <p>THP</p>
          <p>Le début de l'aventure...</p>
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
            <p><a href="cv.pdf" download>Curriculum vitæ</a></p>
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
