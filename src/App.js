import "./styles/reset.css";
import "./styles/global.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import SchemaCreator from "./pages/SchemaCreator";
import ExerciseCreator from "./pages/ExerciseCreator";
import ListOfExercises from "./pages/ListOfExercises";
import ExercisesPage from "./pages/ExercisesPage";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/schema">
            <SchemaCreator />
          </Route>
          <Route exact path="/example">
            <ExerciseCreator />
          </Route>
          <Route exact path="/test">
            <ExercisesPage />
          </Route>
          <Route exact path="/list">
            <ListOfExercises />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
