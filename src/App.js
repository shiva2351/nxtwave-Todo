import {Switch,Route,BrowserRouter, Redirect} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import LoginRoute from "./components/LoginRoute";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LoginRoute}/>
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/"/>
      </Switch>
    </div></BrowserRouter>
  );
}

export default App;
