import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={['/', '/home']} component={Home} />

            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/products' component={ProductList} />
            
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
