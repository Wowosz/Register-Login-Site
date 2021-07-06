import './App.css';
import LoginSite from './components/LoginSite';
import RegisterSite from './components/RegisterSite'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginSite />
        </Route>
        <Route exact path ="/register">
          <RegisterSite />
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
