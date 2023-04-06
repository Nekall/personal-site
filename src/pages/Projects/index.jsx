// Assets
import notacine from "../../assets/images/projects/notacine-grey.webp"
import savime from "../../assets/images/projects/savime-grey.webp"
import ronincode from "../../assets/images/projects/ronincode-grey.webp"
import slickk from "../../assets/images/projects/slickk-grey.webp"
import silverfish from "../../assets/images/projects/silverfish-grey.webp"

// Styles
import styles from "../../styles/pages/Projects.module.scss";

const Projects = () => {

  const projects = [
    {
      name: "Savime",
      description: "«The time-saver for teams & companies.»",
      link: "/",
      image: savime,
    },
    {
      name: "Slickk",
      description: "Only Skills Matter",
      link: "/",
      image: slickk,
    },
    {
      name: "SilverfishInfestingSpace",
      description: "Site de communauté Minecraft",
      link: "/",
      image: silverfish,
    },
    {
      name: "RoninCode",
      description: "Site mentorat et communauté de développeurs",
      link: "/",
      image: ronincode,
    },
    {
      name: "NotaCine",
      description: "Site de notes de films",
      link: "/",
      image: notacine,
    }
  ];

  return (
    <div className={styles.__projects}>
      <h1 className={styles.__title}>Projects</h1>
      <div className={styles.__container}>
        {projects.map(({ name, description, link, image }, index) => (
          <a href={link} className={styles.__project} key={`project-${index}`}>
            <div>
            <img className={styles.__logo} src={image} alt={name} />
            </div>
            <div className={styles.__details}>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects