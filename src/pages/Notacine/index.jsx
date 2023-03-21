import React from "react";
import { Link } from 'react-router-dom';

// Assets
import notacine from "../../assets/images/projects/notacine-screen.jpg";
import previous from 'assets/images/previous.svg';

// Styles
import styles from "../../style/pages/Notacine.module.scss";

const Notacine=()=>{
  return(
    <div className="container">
      <Link to="/#projects">
        <img className="previous" src={previous} alt="Retour à la page principale"/>
      </Link>
      <p className="project-title">Projet Notacine</p>
      <img className={styles.notacine} src={notacine} alt="notacine"/>
      <p><a href="https://github.com/Day-101/NotaCine" target="_blank" rel="noopener noreferrer">Github du projet</a></p>
      <p className="project-description">Lorsque vous critiquez des films, vous devez prendre les évaluations très au sérieux. Cependant, nous pensons que la manière habituelle d'utiliser un chiffre pour évaluer un film est biaisée. C'est pourquoi nous avons créé NotaCine, un site web qui ne ressemble pas aux centaines d'autres services d'évaluation de films.</p>
    </div>
  )
};
export default Notacine;
