import { useState } from "react";

// Assets
import notacine from "../../assets/images/projects/notacine-grey.webp";
import savime from "../../assets/images/projects/savime-grey.webp";
import ronincode from "../../assets/images/projects/ronincode-grey.webp";
import slickk from "../../assets/images/projects/slickk-grey.webp";
import silverfish from "../../assets/images/projects/silverfish-grey.webp";
import cross from "../../assets/images/icons/cross.svg";

// Styles
import styles from "../../styles/pages/Projects.module.scss";

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Savime",
      description: "«The time-saver for teams & companies.»",
      image: savime,
    },
    {
      name: "Slickk",
      description: "Only Skills Matter",
      image: slickk,
    },
    {
      name: "RoninCode",
      description: "Site mentorat et communauté de développeurs",
      image: ronincode,
    },
    {
      name: "NotaCine",
      description: "Site de notes de films",
      image: notacine,
    },
    {
      name: "SilverfishInfestingSpace",
      description: "Site de communauté Minecraft",
      image: silverfish,
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
              <h2>{selectedProject.name}</h2>
              <button className={styles.__close} onClick={() => setModalIsOpen(false)}>
                <img src={cross} alt="close" />
              </button>
            </div>
            <div className={styles.__modal__body}>
              <img className={styles.__modal__logo} src={selectedProject.image} alt={selectedProject.name} />
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects