// Styles
import styles from "./styles.module.scss";

const Navbar=()=>(
  <nav className={styles.navbar}>
    <div>
      <h1 className={styles.name}>Benjamin Anezo</h1>
      <p className={`${styles.name} ${styles.front_name}`}>Benjamin Anezo</p>
      <p className={styles.note}>DEVELOPPEUR FULLSTACK JUNIOR</p>
    </div>
    <div className={styles.anchors}>
      <a href="#competences">competences</a>
      <a href="#formation">formation</a>
      <a href="#projects">projets</a>
      <a href="#contact">contact</a>
    </div>
  </nav>
);

export default Navbar;
