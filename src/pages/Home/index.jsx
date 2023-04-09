import React from "react";

// Styles
import styles from "../../styles/pages/Home.module.scss"

const Home = () => {
  console.clear()
  console.log(("  _   _               "), '\n', ("( ) ( )              "), '\n', ("| |_| |   __   _   _ "), '\n', ("|  _  | /'__`\\( ) ( )"), '\n', ("| | | |(  ___/| (_) |"), '\n', ("(_) (_)`\\____)`\\__, |"), '\n', ("              ( )_| |"), '\n', ("              `\\___/'"));
  //console.log("N'hésitez pas a me contacter si vous êtes interessés par mon profil ☺");

  const experience =
    [
      {
        title: "Piscine de 42",
        date: "2017",
        details: "Piscine de 42, 2 mois de formation intensive en C."
      },
      {
        title: "Grande Distribution",
        date: "2018-2020",
        details: "Travail dans une grande surface, en tant qu'employé libre service."
      },
      {
        title: "The Hacking Project",
        date: "2021",
        details: "Formation intensive de 6 mois en développement web."
      },
      {
        title: "3W Academy ✕ Slickk",
        date: "2022-PRESENT",
        details: "Alternance de 2 années en développement web."
      },
    ]

  return (
    <div className={styles.__home}>
      <div className={styles.__introduction}>
        <p>Hey, je suis Neka, developpeur fullstack principalement javascript.</p>
        <p>Cela fait des années que le monde du développement informatique m'attire. En 2021 j'ai enfin sauté le pas, en quittant mon ancien travail dans l'agroalimentaire et en rejoignant le bootcamp de <a href="https://www.thehackingproject.org/" target="_blank" rel="noopener noreferrer">The Hacking Project</a> afin de devenir fullstack développeur. Suite à cette première formation et dans le but de me professionnaliser, je suis actuellement étudiant à la <a href="https://3wa.fr/" target="_blank" rel="noopener noreferrer">3w Academy</a>  en alternance chez <a href="https://www.slickk.eu/" target="_blank" rel="noopener noreferrer">Slickk</a>.</p>
        <p>Je vis actuellement à Paris.</p>
        <div>
          <div className={styles.__experience}>
            <ol>
              {experience.map(({ title, date, details }, index) => (
                <li key={`exp-${index}`}>
                  <details>
                    <summary>
                      {title} <span>― {date}</span>
                    </summary>
                    <p>{details}</p>
                  </details>
                </li>
              ))}
            </ol>
          </div>

          <a className={styles.__btn_download} href="/Neka_Anezo_CV.png" target="_blank">Curriculum vitæ </a>
          <p className={styles.__stamp}>2017-PRESENT, Have a nice dev ! ― Neka</p>
        </div>
      </div>
    </div>
  )
};
export default Home;
