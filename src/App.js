import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Switch , Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Shared/Header/Header';
import Login from './Component/LogIn/Login';
import Services from './Component/Services/Services';
import AuthProvider from './context/AuthProvider';
import Booking from './Component/Booking/Booking';
import PrivateRoute from './Component/LogIn/PrivateRoute/PrivateRoute';
import BookingInformation from './Component/BookingInformation/BookingInformation';
import ServiceAdded from './Component/ServiceAdded/ServiceAdded';
import MangeService from './Component/MageService/MangeService';
import AddImg from './Component/AddImg/AddImg';
import TourismCars from './Component/TourismCars/TourismCars';
import Ticket from './Component/Ticket/Ticket';
import ImagesTourist from './Component/ImagesTourist/ImagesTourist';
import Allimg from './Component/Allimg/Allimg';
import ImagesAdded from './Component/ImagesAdded/ImagesAdded';
import AddvehiclesData from './Component/ImagesAdded/AddvehiclesData/AddvehiclesData';
import ShowUser from './Component/ShowUser/ShowUser';
import UpdateUser from './Component/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
     
     <AuthProvider>
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
        <Route path="/imagesTourist">
          <ImagesTourist></ImagesTourist>
        </Route>
        <PrivateRoute path="/allimg/:img">
          <Allimg></Allimg>
        </PrivateRoute>
        <Route path="/imagesAdded">
          <ImagesAdded></ImagesAdded>
        </Route>
        <PrivateRoute path="/booking/:service">
          <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path="/bookinginformation">
          <BookingInformation></BookingInformation>
        </PrivateRoute>
      
        <Route path="/tourismCar">
          <TourismCars></TourismCars>
        </Route>
        <PrivateRoute path="/ticket/:vehicle">
          <Ticket></Ticket>
        </PrivateRoute>

        <Route path="/serviceAdded">
          <ServiceAdded></ServiceAdded>
        </Route>
        <Route path="/mangeServices">
          <MangeService></MangeService>
        </Route>
        {/* <Route path="/addImg">
          <AddImg></AddImg>
        </Route> */}
        <Route path="/addvehiclesdata">
          <AddvehiclesData></AddvehiclesData>
        </Route>
        <Route path="/showUser/update/:id">
          <UpdateUser></UpdateUser>
        </Route>
        <Route path="/showUser">
          <ShowUser></ShowUser>
        </Route>
        
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
     </AuthProvider>
     
    </div>
  );
}

export default App;
