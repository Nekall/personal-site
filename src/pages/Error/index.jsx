import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import styles from "../../styles/pages/Error.module.scss";

const Error = () => {
  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  if (timer === 0) {
    return navigate("/");
  }

  return (
    <div className={styles.__error}>
      <div>
        <h1>Erreur 404</h1>
        <p>Page non trouvée</p>
        <div className={styles.__timer}>
          <p>Vous allez être redirigé vers la page d'accueil dans {timer} secondes</p>
          <p>ou vous pouvez cliquer sur le lien suivant</p>
        </div>
        <Link to="/">
          <p>Retour à la page d'accueil</p>
        </Link>
      </div>
    </div>
  )
};

export default Error;
