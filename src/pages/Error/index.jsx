import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import styles from "../../styles/pages/Error.module.scss";

const Error = ({ lang }) => {
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

  const { title, subtitle, back, sentence1, sentence2, sentence3 } = {
    title: lang === "fr" ? "Erreur 404" : "Error 404",
    subtitle: lang === "fr" ? "Page non trouvée" : "Page not found",
    sentence1: lang === "fr" ? "Vous allez être redirigé vers la page d'accueil dans" : "You will be redirected to the home page in",
    sentence2: lang === "fr" ? "secondes" : "seconds",
    sentence3: lang === "fr" ? "ou vous pouvez cliquer sur le lien suivant" : "or you can click on the following link",
    back: lang === "fr" ? "Retour à la page d'accueil" : "Back to home page"
  }

  return (
    <div className={styles.__error}>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className={styles.__timer}>
          <p>{sentence1} {timer} {sentence2}</p>
          <p>{sentence3}</p>
        </div>
        <Link to="/">
          <p>{back}</p>
        </Link>
      </div>
    </div>
  )
};

export default Error;
