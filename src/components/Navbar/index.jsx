// Styles
import styles from "./styles.module.scss";

const Navbar = () => {

  const links = [
    {
      name: "projets",
      link: "/projects",
      target: "_self",
      rel: "",
    },
    {
      name: "twitter",
      link: "https://twitter.com/36Qm7p5CGz",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "codepen",
      link: "https://codepen.io/LilNeka",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "github",
      link: "https://github.com/Nekall",
      target: "_blank",
      rel: "noopener noreferrer",
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
    </nav>
  )
};

export default Navbar;
