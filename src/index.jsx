import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

// Components
import Navbar from "components/Navbar";
//import Footer from "components/Footer";

// Pages
import Projects from "pages/Projects";
import Error from "pages/Error";
import Home from "pages/Home";

// Styles
import "./styles/main.scss";

const App = () => (
  <div>
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>
          <Route path="/projects" exact>
            <Navbar />
            <Projects />
          </Route>
          {/*<Route path="/ronincode" exact>
            <Name />
            <Project name={"Projet RoninCode"} img={ronincode} alt={"ronincode"} link={"https://ronincode.vercel.app"} githubFullstack={"https://github.com/Nekall/ronincode"} description={"Plateforme web de mise en relation de mentors et d'apprentis en développement informatique proposant à ses membres des contenus et outils pédagogiques."} />
          </Route>
          <Route path="/notacine" exact>
            <Name />
            <Project name={"Projet Notacine"} img={notacine} alt={"notacine"} githubFullstack={"https://github.com/Day-101/NotaCine"} description={"Lorsque vous critiquez des films, vous devez prendre les évaluations très au sérieux. Cependant, nous pensons que la manière habituelle d'utiliser un chiffre pour évaluer un film est biaisée. C'est pourquoi nous avons créé NotaCine, un site web qui ne ressemble pas aux centaines d'autres services d'évaluation de films."} />
          </Route>
          <Route path="/silverfish-infesting-space" exact>
            <Name />
            <Project name={"Projet Silverfish Infesting Space"} img={silverfish} alt={"silverfish"} link={"https://silverfish.infesting.space"} githubFullstack={"https://github.com/Nekall/Silverfish-Space"} description={"Site de communauté Minecraft, quelques pages de 'recettes' ajouté dans le jeu, et la possibilité de télécharger des textures personnalisées."} />
          </Route>
          <Route path="/slickk" exact>
            <Name />
            <Project name={"Slickk"} img={slickk} alt={"slickk"} link={"https://www.slickk.eu"} description={"Recrutez un Développeur Freelance à distance partout en Europe et constituez votre équipe en une journée seulement."} />
          </Route>
          <Route path="/savime" exact>
            <Name />
            <Project name={"Projet Savime"} img={savime} alt={"savime"} link={"https://www.savime.tech"} githubFrontend={"https://github.com/Nekall/Savime-front"} githubBackend={"https://github.com/Nekall/Savime-back"} description={"«The time-saver for teams & companies.» - Application orienté RH, Savime seɪv.ɪm sert à créer une communication rapide, simple & sécurisée entre des employé·es et le département RH d'une entreprise. Que se soit le partage de documents, la gestion des congés ou l’accès aux informations importantes lié à l’entreprise & la carrière des employé·es. Cette application se veux clef en main."} />
</Route>*/}
          <Route>
            <Error />
          </Route>
        </Switch>
      </main>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
