import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Download from "./pages/Download/Download";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/Footer";
import "./global.scss";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/download">
            <Download />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
