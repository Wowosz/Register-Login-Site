import './App.css';
import Persons from './components/Persons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router"
function App() {
  return (
    <div className="App">
        <Persons />
    </div>
  );
}

export default App;
