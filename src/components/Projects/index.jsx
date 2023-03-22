import { Link } from "react-router-dom"

// Assets Projects
import silverlogo from "../../assets/images/projects/silverfish-logo.png";
import roninlogo from "../../assets/images/projects/ronincode-logo.jpg";
import notalogo from "../../assets/images/projects/notacine-logo.jpg";
import slickk from "../../assets/images/projects/slickk-logo.png";
import savime from "../../assets/images/projects/savime-logo.png";

// Styles
import styles from "./styles.module.scss";

const Projects = () => {
    return (
        <div className={styles.projects}>
        <div className={"title-container"}>
          <h2 className={"title shadow"}>Mes Réalisations</h2>
          <h2 className={"title"}>Mes Réalisations</h2>
        </div>
        <div className={styles.projects_columns}>
        <Link to="/savime">
            <img className={styles.savime_logo} src={savime} alt="logo savime"/>
          </Link>
          <Link to="/slickk">
            <img className={styles.slickk_logo} src={slickk} alt="logo slickk"/>
          </Link>
          <Link to="/silverfish-infesting-space">
            <img className={styles.silverlogo} src={silverlogo} alt="logo silverfish infesting space"/>
          </Link>
          <Link to="/ronincode">
            <img className={styles.roninlogo} src={roninlogo} alt="logo ronincode"/>
          </Link>
          <Link to="/notacine">
            <img className={styles.notalogo} src={notalogo} alt="logo notaciné"/>
          </Link>
        </div>
      </div>
    )
}

export default Projects;