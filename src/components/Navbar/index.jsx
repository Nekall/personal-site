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
      name: "projets",
      link: "/projects",
      target: "_self",
      rel: "",
      icon: folder
    },
    {
      name: "github",
      link: "https://github.com/Nekall",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: github
    },
    {
      name: "codepen",
      link: "https://codepen.io/LilNeka",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: codepen
    },
    {
      name: "twitter",
      link: "https://twitter.com/36Qm7p5CGz",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: twitter
    },
    {
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
        <a href="/">Neka</a>
      </h1>
      <div className={styles.__links}>
        {links.map(({ name, link, target, rel }, index) => (
          <li key={`link-${index}`}>
            <a href={link} target={target} rel={rel}>
              {name}
            </a>
          </li>
        ))}
      </div>
      <div className={styles.__mobile_links}>
        {links.map(({ name, link, target, rel, icon }, index) => (
          <li key={`link-${index}`}>
            <a href={link} target={target} rel={rel}>
              {icon ? <img src={icon} alt={name} /> : name}
            </a>
          </li>
        ))}
      </div>
    </nav>
  )
};

export default Navbar;
