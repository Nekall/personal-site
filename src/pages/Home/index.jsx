import React from "react";

// Styles
import styles from "../../styles/pages/Home.module.scss"

const Home = () => {
  console.clear()
  console.log(("  _   _               "), '\n', ("( ) ( )              "), '\n', ("| |_| |   __   _   _ "), '\n', ("|  _  | /'__`\\( ) ( )"), '\n', ("| | | |(  ___/| (_) |"), '\n', ("(_) (_)`\\____)`\\__, |"), '\n', ("              ( )_| |"), '\n', ("              `\\___/'"));
  //console.log("N'hésitez pas a me contacter si vous êtes interessés par mon profil ☺");

  return (
    <div className={styles.__home}>
      <div className={styles.__introduction}>
        <p>Hey, je suis Neka, developpeur fullstack principalement javascript.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus architecto accusantium ullam atque odio. Ipsa earum voluptas velit aliquid dolor.
        </p>
        <p>Cela fait des années que le monde du développement informatique m'attire. En 2021 j'ai enfin sauté le pas, en quittant mon ancien travail dans l'agroalimentaire et en rejoignant le bootcamp de <a href="https://www.thehackingproject.org/" target="_blank" rel="noopener noreferrer">The Hacking Project</a> afin de devenir fullstack développeur. Suite à cette première formation et dans le but de me professionnaliser, je suis actuellement étudiant à la <a href="https://3wa.fr/" target="_blank" rel="noopener noreferrer">3w Academy</a>  en alternance chez <a href="https://www.slickk.eu/" target="_blank" rel="noopener noreferrer">Slickk</a>.</p>
      </div>
    </div>
  )
};
export default Home;
