import { Link } from 'react-router-dom';

// Assets
import github from "../../assets/images/icons/github.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import codepen from "../../assets/images/icons/codepen.svg";
import folder from "../../assets/images/icons/folder.svg";

// Styles
import styles from "./styles.module.scss";

const Navbar = ({ lang, setLang }) => {

  const links = [
    {
      reactRouter: true,
      name: lang === "fr" ? "projets" : "projects",
      link: "/projects",
      target: "_self",
      rel: "",
      icon: folder
    },
    {
      reactRouter: false,
      name: "github",
      link: "https://github.com/Nekall",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: github
    },
    {
      reactRouter: false,
      name: "codepen",
      link: "https://codepen.io/LilNeka",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: codepen
    },
    {
      reactRouter: false,
      name: "linkedin",
      link: "https://www.linkedin.com/in/benjamin-anezo/",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: linkedin
    },
  ];

  const changeLang = () => {
    if (lang === "fr") {
      setLang("en");
    } else {
      setLang("fr");
    }
  }

  return (
    <nav className={styles.__navbar}>
      <h1 className={styles.__name}>
        <Link to="/">Neka</Link>
      </h1>
      <ul className={styles.__links}>
        {links.map(({ name, link, target, rel, reactRouter }, index) => (
          <li key={`link-${index}`}>
            {!reactRouter ? <a href={link} target={target} rel={rel}>
              {name}
            </a>
              : <Link to={link} target={target} rel={rel}>
                {name}
              </Link>
            }
          </li>
        ))}
        <li>
        <button className={styles.__lang} onClick={() => changeLang()}>
          {lang === "fr" ? "EN" : "FR"}
        </button>
        </li>
      </ul>
      <ul className={styles.__mobile_links}>
        {links.map(({ name, link, target, rel, icon, reactRouter }, index) => (
          <li key={`link-${index}`}>
            {!reactRouter ? <a href={link} target={target} rel={rel}>
              {icon ? <img src={icon} alt={name} /> : name}
            </a> :
              <Link to={link} target={target} rel={rel}>
                {icon ? <img src={icon} alt={name} /> : name}
              </Link>
            }
          </li>
        ))}
        <li>
        <button className={styles.__lang} onClick={() => changeLang()}>
          {lang === "fr" ? "EN" : "FR"}
        </button>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
