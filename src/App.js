import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Switch , Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Shared/Header/Header';
import Login from './Component/LogIn/Login';
import Services from './Component/Services/Services';
import Authprovider from './contexts/Authprovider';

function App() {
  return (
    <div className="App">
     <Authprovider>
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
          <Services></Services>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
     </Authprovider>
    </div>
  );
}

export default App;
