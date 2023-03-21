import React from "react";
import previous from 'assets/images/previous.svg';
import silverfish from "../../assets/images/projects/silverfish-screen.png";
import { Link } from 'react-router-dom';

// Styles
import styles from "../../style/pages/Silverfish.module.scss";

const Silverfish=()=>{
  return(
    <div className="container">
      <Link to="/#projects">
        <img className="previous" src={previous} alt="Retour à la page principale"/>
      </Link>
      <p className="project-title">Projet Silverfish Infesting Space</p>
      <img className={styles.silverfish} src={silverfish} alt="silverfish"/>
      <p><a href="https://github.com/Nekall/Silverfish-Space" target="_blank" rel="noopener noreferrer">Github du projet</a></p>
      <p><a href="https://silverfish.infesting.space" target="_blank" rel="noopener noreferrer">Visiter le site ici !</a></p>
      <p className="project-description">Site de communauté Minecraft, quelques pages de 'recettes' ajouté dans le jeu, et la possibilité de télécharger des textures personnalisées.</p>
    </div>
  )
};
export default Silverfish;
