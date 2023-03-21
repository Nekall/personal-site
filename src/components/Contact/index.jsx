// Assets
import download from "../../assets/images/download.svg";
import location from "../../assets/images/location.svg";
import mail from "../../assets/images/mail.svg";

// Styles
import styles from "./styles.module.scss";

const Contact = () => {
    return (
        <div className={styles.contact}>
        <div className={`title-container`}>
          <h2 className={`title shadow`}>Contact</h2>
          <h2 className={`title`}>Contact</h2>
        </div>
        <div className={styles.contact_columns}>
          <div>
            <img className={styles.logo_contact} src={location} alt="localisation"/>
            <p>Paris</p>
          </div>
          <div>
            <img className={styles.logo_contact} src={download} alt="téléchargement du cv"/>
            <p><a href="/Benjamin_Anezo_CV.png" target="_blank">Curriculum vitæ</a></p>
          </div>
          <div>
            <img className={styles.logo_contact} src={mail} alt="mail"/>
            <p>contact@neka.dev</p>
          </div>
        </div>
      </div>
    );
};

export default Contact;