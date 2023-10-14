import { useState } from "react";

// Assets
import notacine from "../../assets/images/projects/notacine-grey.webp";
import savime from "../../assets/images/projects/savime-grey.webp";
import ronincode from "../../assets/images/projects/ronincode-grey.webp";
import slickk from "../../assets/images/projects/slickk-grey.webp";
import silverfish from "../../assets/images/projects/silverfish-grey.webp";
import umbrella from "../../assets/images/projects/umbrella-grey.webp";
import cross from "../../assets/images/icons/cross.svg";

import notacineScreenshot from "../../assets/images/projects/notacine-screen.webp";
import savimeScreenshot from "../../assets/images/projects/savime-screen.webp";
import ronincodeScreenshot from "../../assets/images/projects/ronincode-screen.webp";
import slickkScreenshot from "../../assets/images/projects/slickk-screen.webp";
import silverfishScreenshot from "../../assets/images/projects/silverfish-screen.webp";
import umbrellaScreenshot from "../../assets/images/projects/umbrella-screen.webp";

// Styles
import styles from "../../styles/pages/Projects.module.scss";

const Projects = ({ lang }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomModalIsOpen, setZoomModalIsOpen] = useState(false);

  const projects = [
    {
      name: "Savime",
      description: "«The time-saver for teams & companies.»",
      details: lang === "fr" ? "«The time-saver for teams & companies.» - Application orienté RH, Savime sert à créer une communication rapide, simple & sécurisée entre des employé·es et le département RH d'une entreprise. Que se soit le partage de documents, la gestion des congés ou l’accès aux informations importantes lié à l’entreprise & la carrière des employé·es. Cette application se veux clef en main." : "Savime is an HR oriented application used to create a fast, simple & secure communication between employees and the HR department of a company. Whether it's document sharing, leave management or access to important information related to the company & the employees' career. This application is a turnkey solution.",
      image: savime,
      github: "https://github.com/Nekall/Savime-front",
      link: "https://savime.neka.dev/",
      screenshot: savimeScreenshot,
    },
    {
      name: "Slickk",
      description: "Only Skills Matter",
      details: lang === "fr" ? "Recrutez un Développeur Freelance à distance partout en Europe et constituez votre équipe en une journée seulement." : "Recruit a remote Freelance Developer anywhere in Europe and build your team in just one day.",
      image: slickk,
      link: "https://www.slickk.eu/",
      screenshot: slickkScreenshot,
    },
    {
      name: "RoninCode",
      description: lang === "fr" ? "Site mentorat et communauté de développeurs" : "Mentoring site and developer community",
      details: lang === "fr" ? "Plateforme web de mise en relation de mentors et d'apprentis en développement informatique proposant à ses membres des contenus et outils pédagogiques." : "Web-based platform for connecting IT development mentors and apprentices offering educational content and tools to its members.",
      image: ronincode,
      github: "https://github.com/Nekall/ronincode",
      link: "https://ronincode.vercel.app/",
      screenshot: ronincodeScreenshot,
    },
    {
      name: "NotaCine",
      description: lang === "fr" ? "Site de notes de films" : "Film notes site",
      details: lang === "fr" ? "Lorsque vous critiquez des films, vous devez prendre les évaluations très au sérieux. Cependant, nous pensons que la manière habituelle d'utiliser un chiffre pour évaluer un film est biaisée. C'est pourquoi nous avons créé NotaCine, un site web qui ne ressemble pas aux centaines d'autres services d'évaluation de films." : "When you review films, you have to take the ratings very seriously. However, we think the usual way of using a number to rate a movie is biased. That's why we created NotaCine, a website that is unlike the hundreds of other movie rating services.",
      image: notacine,
      github: "https://github.com/Day-101/NotaCine",
      screenshot: notacineScreenshot,
    },
    {
      name: "SilverfishInfestingSpace",
      description: lang === "fr" ? "Site de communauté Minecraft" : "Minecraft community website",
      details: lang === "fr" ? "Site de communauté Minecraft, quelques pages de 'recettes' ajouté dans le jeu, et la possibilité de télécharger des textures personnalisées." : "Minecraft community website, some pages of 'recipes' added in the game, and the ability to download custom textures.",
      image: silverfish,
      github: "https://github.com/Nekall/Silverfish-Space",
      link: "https://silverfish.infesting.space/",
      screenshot: silverfishScreenshot,
    },
    {
      name: "Umbrella",
      description: lang === "fr" ? "Site de prévention sur les mots de passe" : "Password prevention website",
      details: lang === "fr" ? "Site de prévention sur les mots de passe. Ne prenez pas de risques avec la sécurité de vos informations personnelles en ligne. Adoptez ces bonnes pratiques de gestion de mots de passe pour protéger vos comptes." : "Password prevention website. Don't take risks with the security of your personal information online. Adopt these good password management practices to protect your accounts.",
      image: umbrella,
      github: "https://github.com/Nekall/Umbrella",
      link: "https://umbrella-neka.vercel.app/",
      screenshot: umbrellaScreenshot,
    },
  ];

  const openModal = (name) => {
    setSelectedProject(projects.find((project) => project.name === name));
    setModalIsOpen(true);
  }

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