import notacine from "../../assets/images/notacine-screen.jpg";
import previous from 'assets/images/previous.svg';
import { Link } from 'react-router-dom';

const Notacine=()=>{

  return(
    <div className="container">
      <Link to="/">
        <img className="previous" src={previous} alt="Retour à la page principale"/>
      </Link>
      <p className="project-title">Projet Notacine</p>
      <img className="notacine" src={notacine} alt="notacine"/>
      <p><a href="https://github.com/Day-101/NotaCine" target="_blank" rel="noreferrer">Github du projet</a></p>
      <p><a href="https://notacine.herokuapp.com/" target="_blank" rel="noreferrer">Visiter le site ici !</a></p>
      <p className="project-description">Lorsque vous critiquez des films, vous devez prendre les évaluations très au sérieux. Cependant, nous pensons que la manière habituelle d'utiliser un chiffre pour évaluer un film est biaisée. C'est pourquoi nous avons créé NotaCine, un site web qui ne ressemble pas aux centaines d'autres services d'évaluation de films.</p>
      <footer>
        <div></div>
        <p>Site créé par Benjamin avec <span>♥</span></p>
      </footer>

    </div>
  )
};
export default Notacine;
