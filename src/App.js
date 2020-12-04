import "./styles/reset.css";
import "./styles/global.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/UniversalComponents/Layout";
import SchemaCreatorPage from "./pages/SchemaCreatorPage";
import ExerciseCreatorPage from "./pages/ExerciseCreatorPage";
import ListOfExercisesPage from "./pages/ListOfExercisesPage";
import ExercisesPage from "./pages/ExercisesPage";
import HomePage from "./pages/HomePage";
import ExerciseCreatorState from "./context/exerciseCreator/exerciseCreatorState";
import SchemaCreatorState from "./context/schemaCreator/schemaCreatorState";
function App() {
  return (
    <Router>
      <ExerciseCreatorState>
        <SchemaCreatorState>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/schema">
                <SchemaCreatorPage />
              </Route>
              <Route exact path="/example">
                <ExerciseCreatorPage />
              </Route>
              <Route exact path="/test">
                <ExercisesPage />
              </Route>
              <Route exact path="/list">
                <ListOfExercisesPage />
              </Route>
            </Switch>
          </Layout>
        </SchemaCreatorState>
      </ExerciseCreatorState>
    </Router>
  );
}

export default App;
