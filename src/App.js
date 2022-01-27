import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/postjobs" element={<Postjobs />} />

          <Route>404 not found!!</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
