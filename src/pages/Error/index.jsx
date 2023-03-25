import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
  <div className="error">
    <h1>Erreur 404</h1>
    <p>Page non trouvée</p>
    <Link to="/">
      <p>Retour à la page d'accueil</p>
    </Link>
  </div>
);

export default Error;
