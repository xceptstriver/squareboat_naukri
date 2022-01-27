import "./App.css";
import React, { useEffect } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../src/containers/Home/home";
import Login from "./containers/Login/login";
import Signup from "./containers/Signup/signup";
import ForgotPassword from "./containers/ForgotPassword/forgotpassword";
import ResetPassword from "./containers/ResetPassword/resetpassword";
import Jobs from "./containers/Jobs/jobs";
import Postjobs from "./containers/PostJobs/postjobs";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forgotpassword" exact component={ForgotPassword} />
          <Route path="/resetpassword" exact component={ResetPassword} />
          <Route path="/jobs" exact component={Jobs} />
          <Route path="/postjobs" exact component={Postjobs} />

          <Route path="*" component={() => <h1>404 not found!</h1>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
