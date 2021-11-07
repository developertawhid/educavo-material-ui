import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import MenuAppBar from "./components/MenuAppBar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users";

function App() {
  return (
    <Router>
        <MenuAppBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
