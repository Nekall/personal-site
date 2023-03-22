import React from "react";
import previous from 'assets/images/previous.svg';
import slickk from "../../assets/images/projects/slickk-screen.png";
import { Link } from 'react-router-dom';

// Styles
import styles from "../../style/pages/Slickk.module.scss";

const Slickk=()=>{
  return(
    <div className="container">
      <Link to="/#projects">
        <img className="previous" src={previous} alt="Retour à la page principale"/>
      </Link>
      <p className="project-title">Slickk</p>
      <img className={styles.slickk} src={slickk} alt="slickk"/>
      <p><a href="https://www.slickk.eu" target="_blank" rel="noopener noreferrer">Visiter le site ici !</a></p>
      <p className="project-description">Recrutez un Développeur Freelance à distance partout en Europe et constituez votre équipe en une journée seulement.</p>
    </div>
  )
};
export default Slickk;
