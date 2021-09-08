import codepen from 'assets/images/codepen.svg';
import github from 'assets/images/github.svg';
import linkedin from 'assets/images/linkedin.svg';
import twitter from 'assets/images/twitter.svg';

const Home=()=>{
  return(
    <>
      <img className=""
       src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
       alt="Me?"/>
      <div>
        <p>Developpeur fullstack junior</p>
        <a href='https://codepen.io/LilNeka/' target="_blank" rel="noreferrer"><img alt="codepen" className="logo-dev" src={codepen} /></a>
        <a href='https://github.com/Nekall' target="_blank" rel="noreferrer"><img alt="github" className="logo-dev" src={github} /></a>
        <a href='https://www.linkedin.com/in/benjamin-anezo-40b83b216/' target="_blank" rel="noreferrer"><img alt="kinkedin" className="logo-dev" src={linkedin} /></a>
        <a href='https://twitter.com/36Qm7p5CGz' target="_blank" rel="noreferrer"><img alt="twitter" className="logo-dev" src={twitter} /></a>
      </div>
      <div>
        <h2>A propos</h2>
        <p>
          Cela fait des années que le monde du développement informatique m'attire.
          En 2021 j'ai enfin sauté le pas, en quittant mon ancien travail dans l'agroalimentaire et en rejoignant
          la formation de <a target="_blank" rel="noreferrer" href="https://www.thehackingproject.org/">The Hacking Project</a> pour une durée de 6 mois.
          Je m'efforce donc depuis cette formation d'apprendre de nouvelles choses en permanance.
        </p>
      </div>
      <div>
        <h2>Mes compétences</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>GraphQL</li>
        <li>React</li>
        <li>React Native</li>
      </div>
      <div>
        <h2>Mes Réalisations</h2>

      </div>
      <footer>
        <p>footer</p>
      </footer>
    </>
  )
};
export default Home;
