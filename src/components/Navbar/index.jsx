import { Link } from 'react-router-dom';

// Assets
import github from "../../assets/images/icons/github.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import codepen from "../../assets/images/icons/codepen.svg";
import folder from "../../assets/images/icons/folder.svg";

// Styles
import styles from "./styles.module.scss";

const Navbar = () => {

  const links = [
    {
      reactRouter: true,
      name: "projets",
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
      name: "twitter",
      link: "https://twitter.com/36Qm7p5CGz",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: twitter
    },
    {
      reactRouter: false,
      name: "linkedin",
      link: "https://www.linkedin.com/in/benjamin-anezo-40b83b216",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: linkedin
    },
  ];

  return (
    <nav className={styles.__navbar}>
      <h1 className={styles.__name}>
        <Link to="/">Neka</Link>
      </h1>
      <div className={styles.__links}>
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
      </div>
      <div className={styles.__mobile_links}>
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
      </div>
    </nav>
  )
};

export default Navbar;
