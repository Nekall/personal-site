// Styles
import styles from "./styles.module.scss";

const Navbar = () => {

  const links = [
    {
      name: "competences",
      target: "/",
    },
    {
      name: "formation",
      target: "/",
    },
    {
      name: "projets",
      target: "/projects",
    },
    {
      name: "contact",
      target: "/",
    },
  ];

  return (
    <nav className={styles.__navbar}>
      <h1 className={styles.__name}>Neka</h1>
      <div className={styles.__links}>
        {links.map(({ name, target }, index) => (
          <a key={`link-${index}`} href={target}>
            {name}
          </a>
        ))}
      </div>
    </nav>
  )
};

export default Navbar;
