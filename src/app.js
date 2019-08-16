import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UnsplashState from "./Context/State/UnsplashState";
import SearchState from "./Context/State/SearchState";
import Layout from "./Components/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Search from "./Pages/Search";
import NotFound from "./Pages/404";

const App = () => {
  return (
    <UnsplashState>
      <SearchState>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/search/photos/:query" component={Search} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </SearchState>
    </UnsplashState>
  );
};

export default App;
