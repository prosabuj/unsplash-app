import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UnsplashState from "./Context/State/UnsplashState";
import SearchState from "./Context/State/SearchState";
import UserState from "./Context/State/UserState";
import UniversalState from "./Context/State/UniversalState";
import Layout from "./Components/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Search from "./Pages/Search";
import SingleImage from "./Pages/SingleImage";
import User from "./Pages/User";
import NotFound from "./Pages/404";

const App = () => {
  return (
    <UnsplashState>
      <SearchState>
        <UniversalState>
          <UserState>
            <Router basename="/unsplash-app">
              <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route
                    exact
                    path="/search/photos/:query"
                    component={Search}
                  />
                  <Route exact path="/photos/:id" component={SingleImage} />
                  <Route exact path="/@:username" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </Layout>
            </Router>
          </UserState>
        </UniversalState>
      </SearchState>
    </UnsplashState>
  );
};

export default App;
