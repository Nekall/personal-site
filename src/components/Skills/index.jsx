// Assets
import javascript from "../../assets/images/technologies/javascript.svg";
import react from "../../assets/images/technologies/react.svg";
import html5 from "../../assets/images/technologies/html5.svg";
import css3 from "../../assets/images/technologies/css3.svg";
import sass from "../../assets/images/technologies/sass.svg";
import nextjs from "../../assets/images/technologies/nextjs.svg";
import strapi from "../../assets/images/technologies/strapi.svg";
import typescript from "../../assets/images/technologies/typescript.svg";
import nodejs from "../../assets/images/technologies/nodejs.svg";

// Styles
import styles from "./styles.module.scss";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className="title-container">
                <h2 className="title shadow">Mes compétences</h2>
                <h2 className="title">Mes compétences</h2>
            </div>
            <div className={styles.technos}>
                <img className={`${styles.techno_logo} ${styles.css3}`} src={css3} alt="css3" />
                <img className={`${styles.techno_logo} ${styles.html5}`} src={html5} alt="html5" />
                <img className={`${styles.techno_logo} ${styles.javascript}`} src={javascript} alt="javascript" />
                <img className={`${styles.techno_logo} ${styles.typescript}`} src={typescript} alt="typescript" />
                <img className={`${styles.techno_logo} ${styles.sass}`} src={sass} alt="sass" />
                <img className={`${styles.techno_logo} ${styles.react}`} src={react} alt="react" />
                <img className={`${styles.techno_logo} ${styles.nextjs}`} src={nextjs} alt="nextjs" />
                <img className={`${styles.techno_logo} ${styles.nodejs}`} src={nodejs} alt="nodejs" />
                <img className={`${styles.techno_logo} ${styles.strapi}`} src={strapi} alt="strapi" />
            </div>
        </div>
    )
}

export default Skills;