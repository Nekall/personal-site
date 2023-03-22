import React from "react";
import { Link } from 'react-router-dom';

// Assets
import previous from 'assets/images/previous.svg';

// Styles
import styles from "../../style/pages/Project.module.scss";

const Project = ({ name, img, alt, link,  githubBackend, githubFrontend, description}) => {
    return (
        <div className="container">
        <Link to="/#projects">
          <img className="previous" src={previous} alt="Retour à la page principale"/>
        </Link>
        <p className="project-title">{name}</p>
        <img className={styles.image} src={img} alt={alt} />
        {githubFrontend && <p><a href={githubFrontend.link} target="_blank" rel="noopener noreferrer">Github Frontend du projet</a></p>}
        {githubBackend && <p><a href={githubBackend.link} target="_blank" rel="noopener noreferrer">Github Backend du projet</a></p>}
        {link && <p><a href={link} target="_blank" rel="noopener noreferrer">Visiter le site ici !</a></p>}
        <p className="project-description">{description}</p>
      </div>
    )
}

export default Project