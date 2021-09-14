import codepen from 'assets/images/codepen.svg';
import github from 'assets/images/github.svg';
import linkedin from 'assets/images/linkedin.svg';
import twitter from 'assets/images/twitter.svg';
import me from "../../assets/images/me.png";
import background from "../../assets/images/pexels-anni-roenkae-4175070.jpg";

const Home=()=>{
  return(
    <div className="columns">
    <div></div>
    <div>
      <div className="photo">
        <img className="background" src={background} alt="background"/>
        <img className="me" src={me} alt="Me?"/>
      </div>
      <div className="social">
        <a href='https://codepen.io/LilNeka/' target="_blank" rel="noreferrer"><img alt="codepen" className="logo codepen" src={codepen} /></a>
        <a href='https://github.com/Nekall' target="_blank" rel="noreferrer"><img alt="github" className="logo github" src={github} /></a>
        <a href='https://www.linkedin.com/in/benjamin-anezo-40b83b216/' target="_blank" rel="noreferrer"><img alt="linkedin" className="logo linkedin" src={linkedin} /></a>
        <a href='https://twitter.com/36Qm7p5CGz' target="_blank" rel="noreferrer"><img alt="twitter" className="logo twitter" src={twitter} /></a>
      </div>

      <div className="about">
        <h2 className="title">A propos</h2>
        <p>
          Cela fait des années que le monde du développement informatique m'attire.
          En 2021 j'ai enfin sauté le pas, en quittant mon ancien travail dans l'agroalimentaire et en rejoignant
          la formation de <a target="_blank" rel="noreferrer" href="https://www.thehackingproject.org/">The Hacking Project</a> pour une durée de 6 mois.
          Je m'efforce donc depuis cette formation d'apprendre de nouvelles choses en permanance.
        </p>
      </div>

      <div className="skills">
        <h2 className="title">Mes compétences</h2>
        <li>Javascript</li>
        <meter id="Javascript"
         min="0" max="100"
         value="60">
        </meter>
        <li>React</li>
        <meter id="React"
         min="0" max="100"
         value="55">
        </meter>
        <li>Ruby On Rails</li>
        <meter id="React Native"
         min="0" max="100"
         value="50">
        </meter>
        <li>GraphQL</li>
        <meter id="GraphQL"
        min="0" max="100"
        value="10">
        </meter>
        <li>React Native</li>
        <meter id="React Native"
         min="0" max="100"
         value="10">
        </meter>
        <li>Nodejs</li>
        <meter id="React Native"
         min="0" max="100"
         value="0">
        </meter>
      </div>

      <div className="speech">
        <h2 className="title">Formation</h2>
        <div>THP</div>
        <div>Le début de l'aventure...</div>
      </div>

      <div className="expertise">
      <h2 className="title">Savoir-faire</h2>
      <li> Choisir les bonnes technologies à utiliser</li>
      <li> Développer des applications web pour des besoins spécifiques</li>
      <li> Adaptation rapide à de nouveaux langages et technologies</li>
      <li> Capacité d’analyse et de résolution de problème</li>
      <li> Évolution et maintenance de sites et d’applications</li>
      <li> Développement Fullstack (Frontend et Backend)</li>
      </div>

      <div className="projects">
        <h2 className="title">Mes Réalisations</h2>
        <div>Notaciné</div>
        <div>Ronincode</div>
      </div>


      <div className="contact">
        <h2 className="title">Contact</h2>
        <div className="contact-columns">
          <li className="bold">Ville</li>
          <li>Paris</li>
          <li className="bold">Adresse Mail</li>
          <li>contact@neka.dev</li>
        </div>
      </div>

      <footer>
        <p>~</p>
      </footer>

      </div>
      <div></div>
    </div>
  )
};
export default Home;
