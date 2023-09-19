import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/pages/auth/SignUpForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <h1>Home Page</h1>} />
        <Route path="/signup" exact render={() => <SignUpForm />} />
      </Switch>
    </div>
  );
}

export default App;
