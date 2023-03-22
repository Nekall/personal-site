import React from "react";
import previous from 'assets/images/previous.svg';
import savime from "../../assets/images/projects/savime-screen.png";
import { Link } from 'react-router-dom';

// Styles
import styles from "../../style/pages/Savime.module.scss";

const Savime = () => {
    return (
        <div className="container">
            <Link to="/#projects">
                <img className="previous" src={previous} alt="Retour à la page principale" />
            </Link>
            <p className="project-title">Projet Savime</p>
            <img className={styles.savime} src={savime} alt="savime" />
            <p><a href="https://github.com/Nekall/Savime-front" target="_blank" rel="noopener noreferrer">Github Frontend du projet</a></p>
            <p><a href="https://github.com/Nekall/Savime-back" target="_blank" rel="noopener noreferrer">Github Backend du projet</a></p>
            <p><a href="https://www.savime.tech" target="_blank" rel="noopener noreferrer">Visiter le site ici !</a></p>
            <p className="project-description">Savime</p>
            <p className="project-description">«The time-saver for teams & companies.»</p>
            <p className="project-description">Application orienté RH, Savime seɪv.ɪm sert à créer une communication rapide, simple & sécurisée entre des employé·es et le département RH d'une entreprise. Que se soit le partage de documents, la gestion des congés ou l’accès aux informations importantes lié à l’entreprise & la carrière des employé·es. Cette application se veux clef en main.</p>
        </div>
    )
};
export default Savime;
