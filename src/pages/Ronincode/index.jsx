import React from "react";
import previous from 'assets/images/previous.svg';
import ronincode from "../../assets/images/ronincode-screen.jpg";
import { Link } from 'react-router-dom';

const Ronincode=()=>{

  return(
    <div className="container">
      <Link to="/">
        <img className="previous" src={previous} alt="Retour à la page principale"/>
      </Link>
      <p className="project-title">Projet RoninCode</p>
      <img className="ronincode" src={ronincode} alt="ronincode"/>
      <p><a href="https://github.com/Nekall/ronincode" target="_blank" rel="noopener noreferrer">Github du projet</a></p>
      <p><a href="https://ronincode.vercel.app" target="_blank" rel="noopener noreferrer">Visiter le site ici !</a></p>
      <p className="project-description">Plateforme web de mise en relation de mentors et d'apprentis en développement informatique proposant à ses membres des contenus et outils pédagogiques.</p>
      <footer>
        <div></div>
        <p>Site créé par Benjamin avec <span>♥</span></p>
      </footer>

    </div>
  )
};
export default Ronincode;
