import { useState } from "react";

// Assets
import notacine from "../../assets/images/projects/notacine-grey.webp";
import savime from "../../assets/images/projects/savime-grey.webp";
import ronincode from "../../assets/images/projects/ronincode-grey.webp";
import slickk from "../../assets/images/projects/slickk-grey.webp";
import silverfish from "../../assets/images/projects/silverfish-grey.webp";
import cross from "../../assets/images/icons/cross.svg";

import notacineScreenshot from "../../assets/images/projects/notacine-screen.webp";
import savimeScreenshot from "../../assets/images/projects/savime-screen.webp";
import ronincodeScreenshot from "../../assets/images/projects/ronincode-screen.webp";
import slickkScreenshot from "../../assets/images/projects/slickk-screen.webp";
import silverfishScreenshot from "../../assets/images/projects/silverfish-screen.webp";

// Styles
import styles from "../../styles/pages/Projects.module.scss";

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomModalIsOpen, setZoomModalIsOpen] = useState(false);

  const projects = [
    {
      name: "Savime",
      description: "«The time-saver for teams & companies.»",
      details: "«The time-saver for teams & companies.» - Application orienté RH, Savime seɪv.ɪm sert à créer une communication rapide, simple & sécurisée entre des employé·es et le département RH d'une entreprise. Que se soit le partage de documents, la gestion des congés ou l’accès aux informations importantes lié à l’entreprise & la carrière des employé·es. Cette application se veux clef en main.",
      image: savime,
      github: "https://github.com/Nekall/Savime-front",
      link: "https://www.savime.tech/",
      screenshot: savimeScreenshot,
    },
    {
      name: "Slickk",
      description: "Only Skills Matter",
      details: "Recrutez un Développeur Freelance à distance partout en Europe et constituez votre équipe en une journée seulement.",
      image: slickk,
      link: "https://www.slickk.eu/",
      screenshot: slickkScreenshot,
    },
    {
      name: "RoninCode",
      description: "Site mentorat et communauté de développeurs",
      details: "Plateforme web de mise en relation de mentors et d'apprentis en développement informatique proposant à ses membres des contenus et outils pédagogiques.",
      image: ronincode,
      github: "https://github.com/Nekall/ronincode",
      link: "https://ronincode.vercel.app/",
      screenshot: ronincodeScreenshot,
    },
    {
      name: "NotaCine",
      description: "Site de notes de films",
      details: "Lorsque vous critiquez des films, vous devez prendre les évaluations très au sérieux. Cependant, nous pensons que la manière habituelle d'utiliser un chiffre pour évaluer un film est biaisée. C'est pourquoi nous avons créé NotaCine, un site web qui ne ressemble pas aux centaines d'autres services d'évaluation de films.",
      image: notacine,
      github: "https://github.com/Day-101/NotaCine",
      screenshot: notacineScreenshot,
    },
    {
      name: "SilverfishInfestingSpace",
      description: "Site de communauté Minecraft",
      details: "Site de communauté Minecraft, quelques pages de 'recettes' ajouté dans le jeu, et la possibilité de télécharger des textures personnalisées.",
      image: silverfish,
      github: "https://github.com/Nekall/Silverfish-Space",
      link: "https://silverfish.infesting.space/",
      screenshot: silverfishScreenshot,
    },
  ];

  const openModal = (name) => {
    console.log(name);
    setSelectedProject(projects.find((project) => project.name === name));
    setModalIsOpen(true);
  }
  console.log(selectedProject);


  return (
    <div className={styles.__projects}>
      <h1 className={styles.__title}>Projects</h1>
      <div className={styles.__container}>
        {projects.map(({ name, description, image }, index) => (
          <button className={styles.__project} key={`project-${index}`} onClick={() => openModal(name)}>
            <div>
              <img className={styles.__logo} src={image} alt={name} />
            </div>
            <div className={styles.__details}>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </button>
        ))}
      </div>
      {modalIsOpen && (
        <div className={styles.__modal}>
          <div className={styles.__content}>
            <div className={styles.__header}>
              <img className={styles.__logo} src={selectedProject.image} alt={selectedProject.name} />
              <button className={styles.__close} onClick={() => setModalIsOpen(false)}>
                <img src={cross} alt="close" />
              </button>
            </div>
            <div className={styles.__body}>
              <div className={styles.__screenshot} onClick={() => setZoomModalIsOpen(true)}>
                <img src={selectedProject.screenshot} alt="Screenshot" />
              </div>
              <div className={styles.__details}>
                <h2>{selectedProject.name}</h2>
                <p className={styles.__description}>{selectedProject.details}</p>
                <div className={styles.__links}>
                  {selectedProject.github && (
                    <a className={styles.__github} href={selectedProject.github} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  )}
                  {selectedProject.link && (
                    <a className={styles.__link} href={selectedProject.link} target="_blank" rel="noreferrer">
                      Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {zoomModalIsOpen && (
        <div className={styles.__zoom_modal}>
          <div className={styles.__header}>
            <button className={styles.__close} onClick={() => setZoomModalIsOpen(false)}>
              <img src={cross} alt="close" />
            </button>
          </div>
          <div className={styles.__screenshot}>
            <img src={selectedProject.screenshot} alt={selectedProject.name} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects;