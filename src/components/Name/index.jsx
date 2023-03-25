// Styles
import styles from "./styles.module.scss";

const Name=()=>(
  <nav>
    <div>
      <h1 className={styles.name}>Benjamin Anezo</h1>
      <p className={`${styles.name} ${styles.front_name}`}>Benjamin Anezo</p>
      <p className={styles.note}>DEVELOPPEUR FULLSTACK JUNIOR</p>
    </div>
  </nav>
);

export default Name;
