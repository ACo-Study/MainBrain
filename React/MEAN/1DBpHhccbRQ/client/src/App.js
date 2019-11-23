import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Router exact path="/" component={Landing} />
        <div className="container">
          <Router exact path="/register" component={Landing} />
          <Router exact path="/login" component={Login} />
          <Router exact path="/profile" component={Profile} />
        </div>
      </div>
    </Router>
  );
}

export default App;
