// Assets
import thp from "assets/images/the-hacking-project-logo.webp";
import threew from "assets/images/3w-academy.svg";

// Styles
import styles from "./styles.module.scss";

const Formation = () => {
    return (
        <section className={styles.education}>
            <div>
                <div className="title-container">
                    <h2 className="title shadow">Formation</h2>
                    <h2 className="title">Formation</h2>
                </div>
                <div className={styles.formation}>
                    <p className={styles.date}>2023</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://3wa.fr/"><img className={styles.logo_3w} src={threew} alt="logo 3w Academy" /></a>
                    <ul>
                        <li>Approfondir ses connaissances du langage JavaScript</li>
                        <li>Maîtriser le framework React pour le front</li>
                        <li>Maîtriser l’une des technologies avancées les plus utilisées en back : NodeJS</li>
                        <li>Consolider les compétences en Programmation Orientée Objet</li>
                    </ul>
                    <p className={styles.date}>2021</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.thehackingproject.org/"><img className={styles.logo_thp} src={thp} alt="logo the hacking project" /></a>
                    <ul>
                        <li>Maîtriser le frontend, le backend, le génie logiciel ainsi que la gestion de projet</li>
                        <li>Apprendre les langages HTML et CSS ainsi qu'à utiliser Bootstrap</li>
                        <li>Découvrir les bases du marketing digital et les notions de design</li>
                        <li>Apprendre à utiliser les outils logiciels Git et Github</li>
                        <li>Lancer un projet et une application web en utilisant le langage Ruby et le framework Ruby on Rails</li>
                        <li>Approfondir ses connaissances du langage JavaScript de l'intégration des interfaces de programmation d'applications (APIs),SPA, de ReactJS.</li>
                        <li>Utiliser les framework et applications React et Redux ainsi que les librairies graphiques</li>
                        <li>Développer une méthodologie de travail utile à tout poste grâce à la maîtrise des outils de collaboration, de la méthodologie Agile ainsi que de la mise en production et de la gestion humaine</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="title-container">
                    <h2 className="title shadow">Savoir-faire</h2>
                    <h2 className="title">Savoir-faire</h2>
                </div>
                <div className={styles.expertise_list}>
                    <ul>
                        <li> Choisir les bonnes technologies à utiliser</li>
                        <li> Développer des applications web pour des besoins spécifiques</li>
                        <li> Adaptation rapide à de nouveaux langages et technologies</li>
                        <li> Capacité d’analyse et de résolution de problème</li>
                        <li> Évolution et maintenance de sites et d’applications</li>
                        <li> Développement Fullstack (Frontend et Backend)</li>
                        <li> Responsive design</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Formation;