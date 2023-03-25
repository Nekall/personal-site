// Assets
import meTransparent from "../../assets/images/me-transparent.webp";
import linkedin from 'assets/images/social-networks/linkedin.svg';
import codepen from 'assets/images/social-networks/codepen.svg';
import twitter from 'assets/images/social-networks/twitter.svg';
import github from 'assets/images/social-networks/github.svg';
import me from "../../assets/images/me-v2.webp";

// Styles
import styles from "./styles.module.scss";

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <div className={styles.photo}>
                <img className={styles.me} src={me} alt="me" />
                <img className={styles.me_transparent} src={meTransparent} alt="me" />
            </div>
            <div className={styles.social}>
                <a href='https://github.com/Nekall' target="_blank" rel="noopener noreferrer"><img alt="github" className={`${styles.logo} ${styles.github}`} src={github} /></a>
                <a href='https://www.linkedin.com/in/benjamin-anezo-40b83b216/' target="_blank" rel="noopener noreferrer"><img alt="linkedin" className={`${styles.logo} ${styles.linkedin}`} src={linkedin} /></a>
                <a href='https://codepen.io/LilNeka/' target="_blank" rel="noopener noreferrer"><img alt="codepen" className={`${styles.logo} ${styles.codepen}`} src={codepen} /></a>
                <a href='https://twitter.com/36Qm7p5CGz' target="_blank" rel="noopener noreferrer"><img alt="twitter" className={`${styles.logo} ${styles.twitter}`} src={twitter} /></a>
            </div>
            <a className={styles.btn_download} href="/Benjamin_Anezo_CV.png" target="_blank">Télécharger mon CV</a>
            <div className="about">
                <div className="title-container">
                    <h2 className="title shadow">A propos</h2>
                    <h2 className="title">A propos</h2>
                </div>
                <p>
                    Cela fait des années que le monde du développement informatique m'attire.
                    En 2021 j'ai enfin sauté le pas, en quittant mon ancien travail dans l'agroalimentaire et en rejoignant
                    le bootcamp de <a target="_blank" rel="noopener noreferrer" href="https://www.thehackingproject.org/">The Hacking Project</a> afin de devenir fullstack développeur.
                    Suite à cette première formation et dans le but de me professionnaliser, je suis actuellement étudiant à la <a target="_blank" rel="noopener noreferrer" href="https://3wa.fr/">3w Academy</a> en alternance chez Slickk.
                </p>
            </div></section>
    )
}

export default Introduction;