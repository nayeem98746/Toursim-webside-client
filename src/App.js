import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Switch , Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Shared/Header/Header';
import Service from './Component/Service/Service';
import Login from './Component/LogIn/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
