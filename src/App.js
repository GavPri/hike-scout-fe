import NavBar from "./components/NavBar";
import styles from "./App.module.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpForm from "./auth/SignUpForm";
import "./api/AxiosDefaults";
import LoginForm from "./auth/LoginForm";
import axios from "axios";
import PostCreateForm from "./components/pages/posts/PostCreateForm";



function App() {
  return (
        <div className={styles.App}>
          <NavBar />
          <Switch>
            <Route path="/" exact render={() => <h1>Home Page</h1>} />
            <Route path="/signup" exact render={() => <SignUpForm />} />
            <Route path="/login" exact render={() => <LoginForm />} />
            <Route path="/posts/create" exact render={() => <PostCreateForm/>}/>
          </Switch>
        </div>
  );
}

export default App;
